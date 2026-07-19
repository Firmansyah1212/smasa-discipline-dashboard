"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { updateSettings } from "@/lib/services/settings";

interface Props {
  settings: any;
}

export default function SettingsForm({
  settings,
}: Props) {

  const [schoolName, setSchoolName] = useState(settings.school_name);

  const [address, setAddress] = useState(settings.school_address);

  const [phone, setPhone] = useState(settings.school_phone);

  const [principal, setPrincipal] = useState(settings.principal);

  const [points, setPoints] = useState(settings.initial_points);

  async function save() {

    await updateSettings({

      school_name: schoolName,

      school_address: address,

      school_phone: phone,

      principal,

      initial_points: Number(points),

    });

    alert("Pengaturan berhasil disimpan.");

  }

  return (

    <div className="rounded-2xl bg-white p-8 shadow">

      <div className="grid gap-5">

        <div>

          <label>Nama Sekolah</label>

          <Input
            value={schoolName}
            onChange={(e)=>setSchoolName(e.target.value)}
          />

        </div>

        <div>

          <label>Alamat</label>

          <Input
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />

        </div>

        <div>

          <label>Telepon</label>

          <Input
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />

        </div>

        <div>

          <label>Kepala Sekolah</label>

          <Input
            value={principal}
            onChange={(e)=>setPrincipal(e.target.value)}
          />

        </div>

        <div>

          <label>Poin Awal Kelas</label>

          <Input
            type="number"
            value={points}
            onChange={(e)=>setPoints(Number(e.target.value))}
          />

        </div>

        <Button
          className="mt-3"
          onClick={save}
        >
          Simpan Pengaturan
        </Button>

      </div>

    </div>

  );

}