"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  School,
  ShieldAlert,
  BarChart3,
  FileText,
  Settings,
  X,
} from "lucide-react";

import { useSidebar } from "./sidebar-provider";

const menus = [
  {
    title: "Dashboard",
    href: "/",
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
  const pathname = usePathname();

  const {
    open,
    setOpen,
  } = useSidebar();

  return (
    <>
      {/* Overlay Mobile */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/40 transition-opacity duration-300

          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }

          lg:hidden
        `}
      />

      {/* Sidebar */}

      <aside
        className={`
          fixed left-0 top-0 z-50

          h-screen
          w-64

          bg-white
          border-r
          shadow-xl

          transition-transform
          duration-300

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
          lg:static
          lg:shadow-sm
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h1 className="text-xl font-bold text-blue-600">
              SMASA
            </h1>

            <p className="text-sm text-gray-500">
              Dashboard Kedisiplinan
            </p>

          </div>

          {/* Tombol Close HP */}

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
          >
            <X size={20} />
          </button>

        </div>

        {/* Menu */}

        <nav className="space-y-2 p-4">

          {menus.map((menu) => {

            const Icon = menu.icon;

            const active =
              pathname === menu.href;

            return (

              <Link
                key={menu.href}
                href={menu.href}
                onClick={() =>
                  setOpen(false)
                }
                className={`
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  transition-all

                  ${
                    active
                      ? "bg-blue-600 text-white shadow"
                      : "text-slate-700 hover:bg-slate-100"
                  }
                `}
              >

                <Icon size={20} />

                <span>
                  {menu.title}
                </span>

              </Link>

            );

          })}

        </nav>

      </aside>
    </>
  );
}