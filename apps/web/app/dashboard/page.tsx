
"use client";

import useUserStore from "@workspace/core/src/store/user-store";


export default function DashboardPage() {
    const user = useUserStore((state) => state.user);
  return (
    <div className="flex justify-center items-center h-screen bg-background px-4">
      <h1 className="text-3xl font-semibold tracking-tight">
        Welcome {" "}<code>{user?.email}</code> to the Dashboard
      </h1>
    </div>
  );
}
