import ClassRow from "./class-row";

interface Props {
  classes: any[];
}

export default function ClassTable({ classes }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Kelas</th>

            <th className="text-left">Jenjang</th>

            <th className="text-left">Jurusan</th>

            <th className="text-left">Poin</th>

            <th className="text-left">Status</th>

            <th className="text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {classes.map((kelas) => (
            <ClassRow
              key={kelas.id}
              kelas={kelas}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}