"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBox() {
  return (
    <div className="relative w-80">

      <Search
        className="absolute left-3 top-3 h-4 w-4 text-gray-400"
      />

      <Input
        className="pl-10"
        placeholder="Cari kelas..."
      />

    </div>
  );
}