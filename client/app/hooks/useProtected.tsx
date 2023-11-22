import { useRouter } from "next/navigation";
import UserAuth from "./userAuth";
import React, { useEffect } from "react";

interface ProtectedProps {
  children: React.ReactNode;
}

export default function Protected({ children }: ProtectedProps) {
  const router = useRouter();
  const isAuthenticated = UserAuth();
  console.log("isAuthenticated", isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? <>{children}</> : null;
}
