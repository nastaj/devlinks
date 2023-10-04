import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Outlet />
    </div>
  );
}

export default AppLayout;
