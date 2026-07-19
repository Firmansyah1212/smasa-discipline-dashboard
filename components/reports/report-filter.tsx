"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  classes: {
    id: string;
    code: string;
  }[];

  categories: {
    id: string;
    name: string;
  }[];

  teachers: string[];
}

export default function ReportFilter({
  classes,
  categories,
  teachers,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [kelas, setKelas] = useState("");
  const [kategori, setKategori] = useState("");
  const [guru, setGuru] = useState("");

  useEffect(() => {
    setStartDate(searchParams.get("start") ?? "");
    setEndDate(searchParams.get("end") ?? "");
    setKelas(searchParams.get("class") ?? "");
    setKategori(searchParams.get("category") ?? "");
    setGuru(searchParams.get("teacher") ?? "");
  }, [searchParams]);

  function handleSearch() {
    const params = new URLSearchParams();

    if (startDate)
      params.set("start", startDate);

    if (endDate)
      params.set("end", endDate);

    if (kelas)
      params.set("class", kelas);

    if (kategori)
      params.set("category", kategori);

    if (guru)
      params.set("teacher", guru);

    router.push(`/reports?${params.toString()}`);
  }

  function handleReset() {
    setStartDate("");
    setEndDate("");
    setKelas("");
    setKategori("");
    setGuru("");

    router.push("/reports");
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

        {/* Tanggal Awal */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Tanggal Awal
          </label>

          <Input
            type="date"
            value={startDate}
            onChange={(e) =>
              setStartDate(e.target.value)
            }
          />

        </div>

        {/* Tanggal Akhir */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Tanggal Akhir
          </label>

          <Input
            type="date"
            value={endDate}
            onChange={(e) =>
              setEndDate(e.target.value)
            }
          />

        </div>

        {/* Kelas */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Kelas
          </label>

          <Select
            value={kelas}
            onValueChange={setKelas}
          >

            <SelectTrigger>

              <SelectValue placeholder="Semua Kelas" />

            </SelectTrigger>

            <SelectContent>

              {classes.map((item) => (

                <SelectItem
                  key={item.id}
                  value={item.id}
                >
                  {item.code}
                </SelectItem>

              ))}

            </SelectContent>

          </Select>

        </div>

        {/* Kategori */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Kategori
          </label>

          <Select
            value={kategori}
            onValueChange={setKategori}
          >

            <SelectTrigger>

              <SelectValue placeholder="Semua Kategori" />

            </SelectTrigger>

            <SelectContent>

              {categories.map((item) => (

                <SelectItem
                  key={item.id}
                  value={item.id}
                >
                  {item.name}
                </SelectItem>

              ))}

            </SelectContent>

          </Select>

        </div>

        {/* Guru */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Guru
          </label>

          <Select
            value={guru}
            onValueChange={setGuru}
          >

            <SelectTrigger>

              <SelectValue placeholder="Semua Guru" />

            </SelectTrigger>

            <SelectContent>

              {teachers.map((item) => (

                <SelectItem
                  key={item}
                  value={item}
                >
                  {item}
                </SelectItem>

              ))}

            </SelectContent>

          </Select>

        </div>

      </div>

      <div className="mt-6 flex flex-wrap gap-3">

        <Button
          onClick={handleSearch}
        >
          Tampilkan
        </Button>

        <Button
          variant="outline"
          onClick={handleReset}
        >
          Reset
        </Button>

        <Button
          variant="secondary"
        >
          Export Excel
        </Button>

        <Button
          variant="destructive"
        >
          Export PDF
        </Button>

      </div>

    </div>
  );
}