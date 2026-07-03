"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  School,
  ShieldAlert,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Data Kelas",
    href: "/classes",
    icon: School,
  },
  {
    title: "Pelanggaran",
    href: "/violations",
    icon: ShieldAlert,
  },
  {
    title: "Statistik",
    href: "/statistics",
    icon: BarChart3,
  },
  {
    title: "Laporan",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Pengaturan",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r shadow-sm">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-blue-600">
          SMASA Dashboard
        </h1>

        <p className="text-sm text-gray-500">
          Kedisiplinan Kelas
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className="flex items-center gap-3 rounded-lg p-3 hover:bg-blue-50 transition"
            >
              <Icon size={20} />

              {menu.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}