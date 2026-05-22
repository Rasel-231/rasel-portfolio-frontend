import Image from "next/image";
import BG from "@/assets/login-bg.avif";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <Image 
        src={BG} 
        alt="Login background" 
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10 " 
      />
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
      </div>
    </div>
  );
}