"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteViolation } from "@/lib/services/delete-violation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface Props {
  violationId: string;
}

export default function DeleteViolationDialog({
  violationId,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleDelete() {
  try {
    setLoading(true);

    await deleteViolation(violationId);

    alert("Pelanggaran berhasil dihapus");

    router.refresh();
  } catch (err: any) {
    console.error(err);

    alert(
      err?.message ||
      JSON.stringify(err, null, 2)
    );
  } finally {
    setLoading(false);
  }
}

  return (
    <AlertDialog>

      <AlertDialogTrigger asChild>

        <Button
          size="sm"
          variant="destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>

      </AlertDialogTrigger>

      <AlertDialogContent>

        <AlertDialogHeader>

          <AlertDialogTitle>
            Hapus Pelanggaran
          </AlertDialogTitle>

          <AlertDialogDescription>
            Data pelanggaran akan dihapus dan poin kelas akan
            dikembalikan secara otomatis.
          </AlertDialogDescription>

        </AlertDialogHeader>

        <AlertDialogFooter>

          <AlertDialogCancel>
            Batal
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={loading}
            onClick={handleDelete}
          >
            {loading ? "Menghapus..." : "Ya, Hapus"}
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>

    </AlertDialog>
  );
}
