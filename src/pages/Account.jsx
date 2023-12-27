import { Outlet } from "react-router-dom";
import ProfileSideMenu from "../features/user/ProfileSideMenu";
import PageHeading from "../components/PageHeading";

function Account() {
  return (
    <>
      <PageHeading path={["home"]} current="my account" />
      <section className="mb-10 mt-4 py-7 md:mt-0  lg:mt-8">
        <div className="container px-6">
          <div className="flex flex-wrap justify-center gap-5 lg:flex-nowrap">
            <ProfileSideMenu />
            <div className="min-h-[300px] grow rounded-md bg-gray-100 p-5 shadow-md sm:p-7">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Account;
