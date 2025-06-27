"use client";

import { use, useState } from "react";
import useUserStore from "../store/user-store";
import z from "zod";
import { useRouter } from "next/navigation";


const loginSchema = z.object({
  email:z.string().email("Invalid email address"),
  password:z.string().min(6,"Password must be at least 6 characters long")
})

export default function useAuth() {
  const setUser = useUserStore((state) => state.setUser);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    await new Promise((resolve, reject) => {
      
        const result = loginSchema.safeParse({email,password})
        if (!result.success) {
          setError(result.error.issues.map((issue) => issue.message).join(", "));
          setLoading(false);
          reject(result.error.issues.map((issue) => issue.message).join(", "));
          return;
        }
        setTimeout(() => {
          console.log("Login successful", { email, password });
          setUser({ id: "1", name: "Abuki", email: email });
          setLoading(false);
          router.push("/dashboard");
          resolve("Login successful");
        }, 2000);
      
    });

    setLoading(false);
  };

  return { loading, error, login };
}
