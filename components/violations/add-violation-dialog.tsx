"use client";

import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ViolationForm from "./violation-form";

interface Props {
  classId: string;
  classCode: string;
  currentPoints: number;
}

export default function AddViolationDialog({
  classId,
  classCode,
  currentPoints,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="bg-red-600 hover:bg-red-700"
        >
          <ShieldAlert className="mr-2 h-4 w-4" />
          Pelanggaran
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>
            Tambah Pelanggaran
          </DialogTitle>
        </DialogHeader>

        <ViolationForm
          classId={classId}
          classCode={classCode}
          currentPoints={currentPoints}
        />
      </DialogContent>
    </Dialog>
  );
}