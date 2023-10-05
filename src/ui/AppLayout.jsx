import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="h-screen bg-grey-light">
      <h1>Hello React!</h1>
      <Outlet />
    </div>
  );
}

export default AppLayout;
