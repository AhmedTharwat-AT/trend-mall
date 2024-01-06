import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import GoTopPage from "./GoTopPage";

function AppLayout() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <NavBar />
      <main className="mt-16 max-nav:mt-20 sm:mt-20 ">
        <Outlet />
      </main>
      <Footer />
      <GoTopPage />
    </div>
  );
}

export default AppLayout;
