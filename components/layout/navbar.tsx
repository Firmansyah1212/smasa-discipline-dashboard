"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { useSidebar } from "./sidebar-provider";

const titles: Record<string, string> = {
  "/": "Dashboard",
  "/classes": "Data Kelas",
  "/violations": "Data Pelanggaran",
  "/statistics": "Statistik",
  "/reports": "Laporan",
  "/settings": "Pengaturan",
};

export default function Navbar() {
  const pathname = usePathname();

  const { setOpen } = useSidebar();

  const title =
    titles[pathname] ?? "Dashboard";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm md:px-8">

      <div className="flex items-center gap-3">

        {/* Tombol Sidebar HP */}

        <button
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <div>

          <h2 className="text-lg font-semibold md:text-xl">
            {title}
          </h2>

          <p className="hidden text-xs text-gray-500 md:block">
            Dashboard Kedisiplinan
          </p>

        </div>

      </div>

      <div className="text-right">

        <h3 className="text-sm font-semibold">
          SMA Negeri 1 Jember
        </h3>

        <p className="hidden text-xs text-gray-500 md:block">
          Tiada Hari Tanpa Prestasi
        </p>

      </div>

    </header>
  );
}