import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignUp } from "./pages/SIgnUp.tsx";
import { LogIn } from "./pages/Login";
import { AuthLayout } from "./pages/layouts/AuthLayout";
import ProtectedRoute from "./context/protectedRoute.tsx";
import ChatPage from "./pages/ChatPage.tsx";
import AuthProvider from "./context/AuthProvider.tsx";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <LogIn />,
      },
    ]
  },
  {
    path: '/chat',
    element: 
    <ProtectedRoute>
      <ChatPage />
    </ProtectedRoute>,
  }
])

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  );
}