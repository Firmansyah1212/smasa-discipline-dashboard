"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getViolationCategories } from "@/lib/services/violation-categories";
import { updateViolation } from "@/lib/services/update-violation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Category {
  id: string;
  name: string;
  deduction: number;
}

interface Props {
  violation: any;
  onSuccess: () => void;
}

export default function EditViolationForm({
  violation,
  onSuccess,
}: Props) {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [selected, setSelected] = useState<Category | null>(null);

  const [teacher, setTeacher] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await getViolationCategories();

      setCategories(data);

      const current = data.find(
        (item) => item.id === violation.category_id
      );

      setSelected(current ?? null);
      setTeacher(violation.teacher);
      setDescription(violation.description ?? "");
      setDate(violation.violation_date);
    }

    load();
  }, [violation]);

  async function handleSave() {
    if (!selected) {
      alert("Pilih kategori");
      return;
    }

    if (!teacher) {
      alert("Nama guru wajib diisi");
      return;
    }

    try {
      setLoading(true);

      await updateViolation({
        violation_id: violation.id,
        category_id: selected.id,
        teacher,
        description,
        violation_date: date,
      });

      // Tutup dialog
      onSuccess();

      // Refresh data
      router.refresh();

      // Reload agar data poin langsung berubah
      window.location.reload();
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-5">

      <div>
        <label className="text-sm font-medium">
          Kategori
        </label>

        <Select
          value={selected?.id}
          onValueChange={(id) => {
            const item = categories.find(
              (c) => c.id === id
            );

            setSelected(item ?? null);
          }}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {categories.map((item) => (
              <SelectItem
                key={item.id}
                value={item.id}
              >
                {item.name} (-{item.deduction})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium">
          Guru
        </label>

        <Input
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Tanggal
        </label>

        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Keterangan
        </label>

        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="rounded-lg bg-slate-100 p-4">
        <p>
          Pengurangan Poin :
          <span className="ml-2 font-bold text-red-600">
            -{selected?.deduction ?? 0}
          </span>
        </p>
      </div>

      <Button
        className="w-full"
        disabled={loading}
        onClick={handleSave}
      >
        {loading ? "Menyimpan..." : "Simpan Perubahan"}
      </Button>

    </div>
  );
}