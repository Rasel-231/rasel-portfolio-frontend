
import AdminNavbar from "@/components/shared/navbar/AdminNavbar";



export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <div >
            <div className="relative z-10 flex flex-col min-h-screen">
                <AdminNavbar />        
                <main className="flex-grow">
                    {children}
                </main> 
            </div>
        </div>
    );
}