interface Props {
  data: any[];
}

export default function ReportTable({
  data,
}: Props) {
  if (data.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow">

        <p className="text-gray-500">
          Belum ada data laporan.
        </p>

      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow overflow-x-auto">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">
              Tanggal
            </th>

            <th className="text-left">
              Kelas
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

          </tr>

        </thead>

        <tbody>

          {data.map((item) => (

            <tr
              key={item.id}
              className="border-b hover:bg-slate-50"
            >

              <td className="p-4">
                {new Date(
                  item.violation_date
                ).toLocaleDateString("id-ID")}
              </td>

              <td>
                {item.classes?.code}
              </td>

              <td>
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

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}