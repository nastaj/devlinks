import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="bg-grey-light md:p-4 xl:min-h-screen">
      <Header />
      <main className="m-4 rounded-xl bg-white md:m-0 xl:h-[88vh]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
