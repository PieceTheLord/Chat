import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";
import { useAuth } from "./AuthProvider";

type ProtectedRouteProps = PropsWithChildren

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useAuth()
  
  if (user?.token === null || user?.user === null) return <Navigate to={'/'} replace />

  return children;
};