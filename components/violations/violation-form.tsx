"use client";

import { useEffect, useState } from "react";
import { getViolationCategories } from "@/lib/services/violation-categories";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addViolation } from "@/lib/services/violations";
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
  classId: string;
  classCode: string;
  currentPoints: number;
}

export default function ViolationForm({
  classId,
  classCode,
  currentPoints,
}: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selected, setSelected] = useState<Category | null>(null);

  const [teacher, setTeacher] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function load() {
      const data = await getViolationCategories();
      setCategories(data);
    }

    load();
  }, []);

  return (
    <div className="space-y-4">

      <div>
        <label className="text-sm font-medium">
          Kelas
        </label>

        <Input
          value={classCode}
          disabled
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Kategori
        </label>

        <Select
          onValueChange={(id) => {
            const item = categories.find((c) => c.id === id);
            setSelected(item ?? null);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih kategori" />
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
          Keterangan
        </label>

        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="rounded-lg bg-slate-100 p-4">
        <p>Poin Saat Ini : {currentPoints}</p>

        <p>Pengurangan : {selected?.deduction ?? 0}</p>

        <p className="font-bold text-red-600">
          Sisa Poin : {currentPoints - (selected?.deduction ?? 0)}
        </p>
      </div>

      <Button
  className="w-full"
  onClick={async () => {
    if (!selected) {
      alert("Pilih kategori terlebih dahulu");
      return;
    }

    if (!teacher) {
      alert("Nama guru wajib diisi");
      return;
    }

    try {
      await addViolation({
    class_id: classId,
    category_id: selected.id,
    teacher,
    description,
    violation_date: new Date().toISOString().split("T")[0],
});

      alert("Pelanggaran berhasil disimpan");

      location.reload();
    } catch (err: any) {
  console.error(err);

  alert(JSON.stringify(err, null, 2));
}
  }}
>
  Simpan Pelanggaran
</Button>

    </div>
  );
}