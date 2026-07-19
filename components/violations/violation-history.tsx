import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import EditViolationDialog from "./edit-violation-dialog";
import DeleteViolationDialog from "./delete-violation-dialog";


interface Props {
  violations: any[];
}

export default function ViolationHistory({
  violations,
}: Props) {
  if (violations.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow">
        <h2 className="mb-6 text-2xl font-bold">
          Riwayat Pelanggaran
        </h2>

        <p className="text-gray-500">
          Belum ada pelanggaran.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Riwayat Pelanggaran
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">
                Tanggal
              </th>

              <th className="text-left">
                Kategori
              </th>

              <th className="text-left">
                Guru
              </th>

              <th className="text-left">
                Keterangan
              </th>

              <th className="text-right">
                Poin
              </th>

              <th className="text-center">
                Aksi
              </th>

            </tr>

          </thead>

          <tbody>

            {violations.map((item: any) => (

              <tr
                key={item.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4">
                  {new Date(
                    item.violation_date
                  ).toLocaleDateString("id-ID")}
                </td>

                <td className="font-semibold">
                  {item.violation_categories?.name}
                </td>

                <td>
                  {item.teacher}
                </td>

                <td>
                  {item.description}
                </td>

                <td className="text-right font-bold text-red-600">
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

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}