import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout() {
  return (
    <div className="bg-[var(--color-brand-500)]">
      <MainNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
