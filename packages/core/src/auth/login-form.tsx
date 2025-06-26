import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Button } from "@workspace/ui/components/button";
import React from "react";

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: (e:React.FormEvent) => void;
  loading?: boolean;
  error:string | null;
  t:any // translation function 
}

export default function LoginForm({setEmail,setPassword,handleSubmit,email,password,loading,error,t}: LoginFormProps) {
  return (
    <form className="p-6 md:p-10 w-full h-full">
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight">{t("welcome")}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label htmlFor="email">{t("email")}</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="bg-background"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="grid gap-1 my-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">{t("password")}</Label>
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                {t("forgotPassword")}
              </a>
            </div>
            <Input id="password" type="password" required className="bg-background" onChange={(e)=>setPassword(e.target.value)} value={password}/>
          </div>

          <Button type="submit" className="w-full mt-5" onClick={handleSubmit} disabled={loading}>
            {loading && (
              <svg className="mr-3 size-5 animate-spin border-white border-2 rounded-full" viewBox="0 0 24 24"> </svg>
            )}
            {loading ? t("loggingIn") : t("login")}
          </Button>

          {error && (
            <p className="text-red-500 text-sm mt-2">
              {error}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
