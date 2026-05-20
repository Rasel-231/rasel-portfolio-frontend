import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";


export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main> 
            <Footer />
        </div>
    );
}