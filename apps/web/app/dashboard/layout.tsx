import { SidebarProvider,SidebarTrigger } from "@workspace/ui/components/sidebar"
import {AppSidebar} from "@workspace/ui/components/custom/app-sidebar";





export default function DashboardLayout({children}:Readonly<{children:React.ReactNode}>) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <main className="w-full h-full overflow-hidden p-5">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )

}