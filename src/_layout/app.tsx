import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
      <div className="relative items-center justify-center h-full">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      </div>
  )
}
