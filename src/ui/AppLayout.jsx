import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="h-screen bg-grey-light">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
