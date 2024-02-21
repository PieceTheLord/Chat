import { createBrowserRouter } from "react-router-dom";
import { SignUp } from "./pages/SIgnUp";
import { LogIn } from "./pages/Login";
import { AuthLayout } from "./pages/layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: 'login', 
        element: <LogIn />,
      },
      {
        path: 'signUP', 
        element: <SignUp />,
      }
    ]
  }
])