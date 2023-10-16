import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="min-h-screen bg-grey-light md:p-4">
      <Header />
      <main className="m-4 h-[87vh] rounded-xl bg-white md:m-0">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
