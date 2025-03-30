import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-[90%] pt-10 overflow-x-hidden">
        <SidebarTrigger  className="md:hidden"/>
        {children}
      </main>
    </SidebarProvider>
  )
}
