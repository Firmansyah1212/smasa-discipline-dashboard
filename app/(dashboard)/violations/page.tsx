import { getViolations } from "@/lib/services/violations";
import ViolationsTable from "@/components/violations/violations-table";
import AddViolationDialog from "@/components/violations/add-violation-dialog";

export default async function ViolationsPage() {
  const violations = await getViolations();

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Data Pelanggaran
          </h1>

          <p className="text-gray-500">
            Seluruh data pelanggaran murid
          </p>
        </div>

        <AddViolationDialog classId={""} classCode={""} currentPoints={0} />

      </div>

      <ViolationsTable
        violations={violations}
      />

    </div>
  );
}