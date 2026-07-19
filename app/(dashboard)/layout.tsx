import { ReactNode } from "react";

import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

import { SidebarProvider } from "@/components/layout/sidebar-provider";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <SidebarProvider>

      <div className="min-h-screen bg-slate-100 lg:flex">

        {/* Sidebar */}

        <Sidebar />

        {/* Content */}

        <div className="flex min-h-screen flex-1 flex-col">

          {/* Navbar */}

          <Navbar />

          {/* Page */}

          <main className="flex-1 p-4 md:p-6 lg:p-8">
            {children}
          </main>

        </div>

      </div>

    </SidebarProvider>
  );
}