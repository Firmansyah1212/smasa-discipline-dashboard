import SettingsForm from "@/components/settings/settings-form";

import { getSettings } from "@/lib/services/settings";

export default async function SettingsPage() {

  const settings = await getSettings();

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Pengaturan
        </h1>

        <p className="text-gray-500">
          Konfigurasi aplikasi Dashboard Kedisiplinan.
        </p>

      </div>

      <SettingsForm
        settings={settings}
      />

    </div>

  );

}