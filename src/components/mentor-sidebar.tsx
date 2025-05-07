"use client"

import { useRouter } from "next/navigation"
import { Calendar, Home, Inbox, Newspaper, LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Home",
    url: "/mentor-dashboard",
    icon: Home,
  },
  {
    title: "Messages",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/mentor-dashboard/calender",
    icon: Calendar,
  },
  {
    title: "Assignments",
    url: "/mentor-dashboard/create-assignment",
    icon: Newspaper,
  },
  {
    title: "Learning Materials",
    url: "/mentor-dashboard/create-mat",
    icon: Newspaper,
  },
  {
    title: "Logout",
    icon: LogOut,
    action: "logout",
  },
]

export function AppSidebar() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        credentials: "include",
      })
      if (res.ok) {
        router.push("/login") // or wherever your login page is
      } else {
        alert("Logout failed.")
      }
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-extrabold">Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="mt-4">
                  <SidebarMenuButton
                    asChild
                    className="text-lg font-bold font-sans"
                    onClick={item.action === "logout" ? handleLogout : undefined}
                  >
                    <a href={item.url ?? "#"}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
