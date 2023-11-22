import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

interface ProtectedProps {
  children: React.ReactNode;
}

export default function AdminProtected({ children }: ProtectedProps) {
  const { user } = useSelector((state: any) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const isAdmin = user?.role === "admin";
      if (!isAdmin) {
        router.push("/");
      }
    }
  }, [user, router]);

  if (!user) {
    return null; // or loading indicator while authentication check is in progress
  }
  const isAdmin = user.role === "admin";
  return isAdmin ? { children } : null; // Render children if isAdmin
}
