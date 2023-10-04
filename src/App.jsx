import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Editor from "./pages/Editor";
import Profile from "./pages/Profile";
import Preview from "./pages/Preview";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/editor" />,
      },
      {
        path: "/editor",
        element: <Editor />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/preview",
        element: <Preview />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
