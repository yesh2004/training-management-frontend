import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/mentor-sidebar"

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
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
