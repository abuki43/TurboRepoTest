import { use, useState } from "react";
import useUserStore from "../store/user-store";
import z from "zod";

export default function useAuth() {
  const setUser = useUserStore((state) => state.setUser);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    await new Promise((resolve, reject) => {
      if (email && password) {
        setTimeout(() => {
          console.log("Login successful", { email, password });
          setUser({ id: "1", name: "Abuki", email: email });
          setLoading(false);
          resolve("Login successful");
        }, 2000);
      } else {
        setError("both email and password are required");
        setLoading(false);
        reject("both email and password are required");
      }
    });

    setLoading(false);
  };

  return { loading, error, login };
}
