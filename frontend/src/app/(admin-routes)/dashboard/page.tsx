import SideBarDashboard from "@/components/dashboard/SideBarDashboard";
import React from "react";

type Props = {};

export async function getOrphanages() {
  const res = await fetch(`https://behappy-api.vercel.app/v1/get-orphanages`, {
    next: { revalidate: 3600 },
  });
  const orpahanges = res.json();
  console.log(orpahanges);
  return orpahanges;
}

const Dashboard = async () => {
  const orphanages = await getOrphanages();
  console.log(orphanages);
  return (
    <main className="p-5">
      <div className="flex justify-between flex-col md:flex-row border-b border-border-form p-3">
        <h1 className="text-title font-bold text-2xl">Orfanatos cadastrados</h1>
        <p className="text-title page text-base">
          {orphanages.length} orfanatos cadastrados
        </p>
      </div>
    </main>
  );
};

export default Dashboard;
