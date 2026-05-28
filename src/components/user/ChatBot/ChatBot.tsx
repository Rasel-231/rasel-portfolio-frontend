"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import profileImage from "@/assets/customer.png";
import { useChatWithAiMutation } from "@/redux/api/queryApi/assistant";
import ReactMarkdown from "react-markdown";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "Hi! আমি রাসেলের অ্যাসিস্ট্যান্ট। আপনাকে কীভাবে সাহায্য করতে পারি?" }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chatWithAi, { isLoading }] = useChatWithAiMutation();

  // অটো-স্ক্রল ইফেক্ট
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!prompt.trim()) return;
    const newMessages = [...messages, { role: "user", content: prompt }];
    setMessages(newMessages);
    setPrompt("");

    try {
      const response = await chatWithAi({ prompt }).unwrap();
      const aiReply = response.reply?.data?.reply || "দুঃখিত, এই মুহূর্তে উত্তর দিতে পারছি না।";
      setMessages([...newMessages, { role: "assistant", content: aiReply }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages([...newMessages, { role: "assistant", content: "সার্ভারে সমস্যা হচ্ছে, পরে চেষ্টা করুন।" }]);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Ripple Effect Button */}
      <div onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer">
        <div className="relative w-16 h-16">
          <div className="absolute w-full h-full rounded-full border-2 border-orange-600 animate-ping opacity-75"></div>
          <div className="absolute w-10 h-10 top-3 left-3 rounded-full border-2 border-orange-600 animate-ping opacity-50" style={{ animationDelay: '0.4s' }}></div>
          <div className="relative rounded-full h-full w-full border-2 border-white bg-white overflow-hidden shadow-xl">
            <Image src={profileImage} alt="Chat" fill className="object-cover" />
          </div>
        </div>
        {/* Online Status */}
        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full z-10"></span>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[350px] h-[500px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
          {/* Header */}
          <div className="bg-pink-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <span className="text-xl">🤖</span>
              <h3 className="font-bold">AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">✕</button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-pink-600 text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'}`}>
                  {/* TypeScript Fix: div-এর ভেতর Markdown রেন্ডার করা */}
                  <div className="prose prose-sm text-xs">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && <p className="text-xs text-gray-400 animate-pulse pl-2">Rasel is thinking...</p>}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
              placeholder="মেসেজ লিখুন..."
              className="w-full text-sm p-2 outline-none text-gray-700 resize-none h-12 bg-gray-50 rounded-lg focus:ring-2 focus:ring-pink-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 mt-2 rounded-lg font-bold transition-all disabled:opacity-50"
            >
              {isLoading ? "অপেক্ষা করুন..." : "পাঠান"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;