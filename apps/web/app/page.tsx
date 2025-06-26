
"use client";

import { Card, CardContent } from "@workspace/ui/components/card";
import LoginForm from "@workspace/core/src/auth/login-form";
import useAuth from "@workspace/core/src/auth/use-auth";
import Image from "next/image";
import placeholder from "../public/place-holder.jpg";
import { useState } from "react";
// import { useRouter } from "next/navigation";


export default function Page() {
  // const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {  loading, error, login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("logging in",{ email, password });
    
    await login(email, password);
    // router.push("/dashboard");
    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background px-4">
      <Card className="flex overflow-hidden shadow-2xl w-full max-w-4xl rounded-2xl py-0">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-0 p-0">
          <div className="flex items-center justify-center p-6">
            <LoginForm setEmail={setEmail} email={email} setPassword={setPassword} password={password} handleSubmit={handleSubmit} loading={loading} error={error}/>

          
          </div>

          <div className="relative hidden md:block">
            <Image
              src={placeholder.src}
              alt="Login Illustration"
              fill
              className="object-cover dark:brightness-75"
              priority
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
