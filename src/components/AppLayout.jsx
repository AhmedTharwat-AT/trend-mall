import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden ">
      <NavBar />
      <main className="mt-20 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
