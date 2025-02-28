import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import NavBar from "./NavBar";
import GoTopPage from "./GoTopPage";
import { Suspense } from "react";
import Spinner from "./Spinner";

function AppLayout() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <NavBar />
      <main className="mt-16 max-nav:mt-20 sm:mt-20 ">
        <Suspense
          fallback={
            <div className="h-96 w-full">
              <Spinner />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <GoTopPage />
    </div>
  );
}

export default AppLayout;
