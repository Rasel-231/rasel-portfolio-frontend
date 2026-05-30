"use client";

import { useGetAllMessagesQuery, useReplyMessageMutation } from "@/redux/api/queryApi/message";
import { Send, Menu, X, MoreVertical, User, MessageCircle } from "lucide-react";
import { useState, useMemo, FormEvent } from "react";
import { toast } from "react-toastify";

type Message = { _id: string; name: string; email: string; message: string; contactNumber?: string; createdAt?: string; isSupport?: boolean; };

const AdminChatDashboard = () => {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [replyText, setReplyText] = useState("");

  const { data: response, isLoading } = useGetAllMessagesQuery(undefined);
  const [supportReply, { isLoading: isSending }] = useReplyMessageMutation();

  const messages = useMemo(() => (response?.data || []).filter((msg: Message) => !msg.isSupport), [response]);
  const activeMessage = useMemo(() => messages.find((m: Message) => m._id === activeChatId), [messages, activeChatId]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !activeMessage) return;

    try {
      await supportReply({
        id: activeMessage._id,
        name: activeMessage.name,
        email: activeMessage.email,
        message: replyText,
        contactNumber: activeMessage.contactNumber,
      }).unwrap();
      
      toast.success("Reply sent successfully!");
      setReplyText("");
    } catch {
      toast.error("Failed to send reply.");
    }
  };

  if (isLoading) return <div className="flex h-screen items-center justify-center font-bold text-emerald-600">Loading Inbox...</div>;

  return (
    <div className="flex h-[100dvh] w-full bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-[350px] bg-white border-r flex flex-col transition-all md:relative ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 shadow-xl md:shadow-none`}>
        <div className="p-6 border-b flex justify-between items-center bg-emerald-600 text-white">
          <h2 className="text-xl font-bold tracking-wider">MESSAGES</h2>
          <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}><X size={24} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          {messages.map((sms: Message) => (
            <div key={sms._id} onClick={() => { setActiveChatId(sms._id); setIsSidebarOpen(false); }} 
              className={`p-4 mb-2 cursor-pointer rounded-xl border transition-all ${activeChatId === sms._id ? "bg-emerald-50 border-emerald-500 shadow-sm" : "bg-white hover:bg-slate-50 border-transparent"}`}>
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2"><User size={14}/> {sms.name}</h4>
              </div>
              <p className="text-xs text-slate-500 truncate">{sms.message}</p>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col h-full bg-white">
        <header className="h-20 bg-white border-b flex items-center px-8 shadow-sm justify-between">
          <div className="flex items-center gap-4">
            <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}><Menu size={24} /></button>
            <div>
                <h3 className="font-bold text-lg text-slate-800">{activeMessage?.name || "Select conversation"}</h3>
                <p className="text-xs text-emerald-600 font-medium">Online</p>
            </div>
          </div>
          <MoreVertical size={24} className="text-slate-400 cursor-pointer" />
        </header>

        <section className="flex-1 overflow-y-auto p-8 bg-slate-50">
          {activeMessage ? (
            <div className="flex flex-col gap-4">
                <div className="bg-white p-5 rounded-2xl rounded-bl-none shadow-sm border max-w-md">
                    <p className="text-sm text-slate-700">{activeMessage.message}</p>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">Recieved at: {activeMessage.createdAt?.slice(0, 10)}</span>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-2">
                <MessageCircle size={48} opacity={0.2}/>
                <p>Select a conversation to start messaging</p>
            </div>
          )}
        </section>

        <footer className="p-6 bg-white border-t">
          <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto flex items-center gap-4">
            <textarea 
              value={replyText} 
              onChange={(e) => setReplyText(e.target.value)}
              className="flex-1 bg-slate-100 border-none rounded-2xl p-4 text-sm outline-none resize-none focus:ring-2 focus:ring-emerald-500 transition-all" 
              placeholder="Type your reply here..."
              rows={1}
            />
            <button type="submit" disabled={!activeChatId || !replyText.trim() || isSending} 
              className="p-4 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 disabled:bg-slate-300 transition-all shrink-0 shadow-lg shadow-emerald-200">
              {isSending ? "..." : <Send size={22} />}
            </button>
          </form>
        </footer>
      </main>
    </div>
  );
};

export default AdminChatDashboard;