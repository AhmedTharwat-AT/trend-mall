import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden ">
      <NavBar />
      <main className="mt-16 max-nav:mt-20 sm:mt-20 ">
        <Outlet />
        <SpeedInsights />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
