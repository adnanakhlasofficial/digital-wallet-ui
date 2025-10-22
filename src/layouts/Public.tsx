import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Public() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-secondary sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="space-y-20 grow">
        <Outlet />
      </main>
      <footer className="bg-secondary border-t border-border py-10 mt-20 ">
        <Footer />
      </footer>
    </div>
  );
}
