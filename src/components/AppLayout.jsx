import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden ">
      <NavBar />
      <main className="max-nav:mt-24 mt-20 ">
        <Outlet />
        <SpeedInsights />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
