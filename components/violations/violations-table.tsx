"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import EditViolationDialog from "./edit-violation-dialog";
import DeleteViolationDialog from "./delete-violation-dialog";

interface Props {
  violations: any[];
}

export default function ViolationsTable({
  violations,
}: Props) {
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // daftar kelas unik
  const classes = useMemo(() => {
    return Array.from(
      new Set(
        violations.map((v) => v.classes?.code).filter(Boolean)
      )
    ).sort();
  }, [violations]);

  // daftar kategori unik
  const categories = useMemo(() => {
    return Array.from(
      new Set(
        violations
          .map((v) => v.violation_categories?.name)
          .filter(Boolean)
      )
    ).sort();
  }, [violations]);

  // filter data
  const filtered = useMemo(() => {
    return violations.filter((item) => {
      const keyword = search.toLowerCase();

      const matchSearch =
        !search ||
        item.teacher?.toLowerCase().includes(keyword) ||
        item.description?.toLowerCase().includes(keyword) ||
        item.classes?.code?.toLowerCase().includes(keyword) ||
        item.violation_categories?.name
          ?.toLowerCase()
          .includes(keyword);

      const matchClass =
        selectedClass === "all" ||
        item.classes?.code === selectedClass;

      const matchCategory =
        selectedCategory === "all" ||
        item.violation_categories?.name === selectedCategory;

      return (
        matchSearch &&
        matchClass &&
        matchCategory
      );
    });
  }, [
    violations,
    search,
    selectedClass,
    selectedCategory,
  ]);

  return (
    <div className="rounded-2xl bg-white p-6 shadow space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            Daftar Pelanggaran
          </h2>

          <p className="text-sm text-gray-500">
            Total Data :{" "}
            <span className="font-semibold text-blue-600">
              {filtered.length}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">

          <Input
            placeholder="Cari..."
            className="md:w-72"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <Select
            value={selectedClass}
            onValueChange={setSelectedClass}
          >
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Semua Kelas" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">
                Semua Kelas
              </SelectItem>

              {classes.map((kelas) => (
                <SelectItem
                  key={kelas}
                  value={kelas}
                >
                  {kelas}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-full md:w-56">
              <SelectValue placeholder="Semua Kategori" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">
                Semua Kategori
              </SelectItem>

              {categories.map((kategori) => (
                <SelectItem
                  key={kategori}
                  value={kategori}
                >
                  {kategori}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left whitespace-nowrap">
                Tanggal
              </th>

              <th className="text-left whitespace-nowrap">
                Kelas
              </th>

              <th className="text-left whitespace-nowrap">
                Kategori
              </th>

              <th className="text-left whitespace-nowrap">
                Guru
              </th>

              <th className="text-left whitespace-nowrap">
                Keterangan
              </th>

              <th className="text-right whitespace-nowrap">
                Poin
              </th>

              <th className="text-center whitespace-nowrap">
                Aksi
              </th>

            </tr>

          </thead>

          <tbody>

            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="py-10 text-center text-gray-500"
                >
                  Tidak ada data ditemukan.
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="p-4 whitespace-nowrap">
                    {new Date(
                      item.violation_date
                    ).toLocaleDateString("id-ID")}
                  </td>

                  <td className="font-medium whitespace-nowrap">
                    {item.classes?.code}
                  </td>

                  <td className="whitespace-nowrap">
                    {item.violation_categories?.name}
                  </td>

                  <td className="whitespace-nowrap">
                    {item.teacher}
                  </td>

                  <td className="max-w-xs">
                    {item.description}
                  </td>

                  <td className="text-right font-bold text-red-600 whitespace-nowrap">
                    -{item.violation_categories?.deduction}
                  </td>

                  <td>
                    <div className="flex justify-center gap-2">
                      <EditViolationDialog
                        violation={item}
                      />

                      <DeleteViolationDialog
                        violationId={item.id}
                      />
                    </div>
                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}