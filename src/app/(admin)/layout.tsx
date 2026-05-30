'use client';
import AdminNavbar from "@/components/shared/navbar/AdminNavbar";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react"; // useState সরিয়ে ফেলুন

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useLayoutEffect(() => {
  
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <AdminNavbar />        
        <main className="flex-grow">
          {children}
        </main> 
      </div>
    </div>
  );
}