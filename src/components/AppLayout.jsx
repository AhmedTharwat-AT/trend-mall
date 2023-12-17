import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className=" min-h-screen">
      <NavBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
