import ClassStatus from "./class-status";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import AddViolationDialog from "@/components/violations/add-violation-dialog";
import Link from "next/link";

interface Props {
  kelas: any;
}

export default function ClassRow({ kelas }: Props) {
  return (
    <tr className="border-b hover:bg-slate-50 transition">
      {/* Kelas */}
      <td className="p-4 font-semibold">
        {kelas.code}
      </td>

      {/* Jenjang */}
      <td>
        {kelas.level}
      </td>

      {/* Jurusan */}
      <td>
        {kelas.major ?? "-"}
      </td>

      {/* Poin */}
      <td className="font-bold text-blue-600">
        {kelas.points}
      </td>

      {/* Status */}
      <td>
        <ClassStatus points={kelas.points} />
      </td>

      {/* Aksi */}
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/classes/${kelas.id}`}>
  <Button
    size="sm"
    variant="outline"
  >
    <Eye className="mr-2 h-4 w-4" />
    Detail
  </Button>
</Link>

          <AddViolationDialog
            classId={kelas.id}
            classCode={kelas.code}
            currentPoints={kelas.points}
          />
        </div>
      </td>
    </tr>
  );
}