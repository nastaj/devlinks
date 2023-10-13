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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import { FormsProvider } from "./context/FormsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
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
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <FormsProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#333333",
            },
          }}
        />
      </FormsProvider>
    </QueryClientProvider>
  );
}

export default App;
