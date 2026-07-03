import SearchBox from "@/components/classes/class-searchbox";
import ClassTable from "@/components/classes/class-table";
import { getClasses } from "@/lib/services/classes";

export default async function ClassesPage() {
  const classes = await getClasses();

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Data Kelas
          </h1>

          <p className="text-gray-500">
            SMA Negeri 1 Jember
          </p>
        </div>

        <SearchBox />
      </div>

      <ClassTable classes={classes} />

    </div>
  );
}