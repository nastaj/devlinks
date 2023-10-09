import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="h-screen bg-grey-light">
      <Header />

      <main className="m-4 rounded-xl bg-white">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
