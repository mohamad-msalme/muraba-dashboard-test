import React from "react";
import { Icon } from "@iconify/react";
import { MainViewTable } from "./MainViewTable";
import { MinViewSummary } from "./MinViewSummary";

export const MainView: React.FC = () => {
  return (
    <main className=" basis-4/5 bg-slate-50 rounded-xl shadow-md p-4 flex flex-col gap-4">
      <p className=" text-2xl font-medium">الرصيد الافتتاحي</p>
      <div className=" flex gap-4">
        <section className=" flex-1 bg-gray-200 rounded-xl p-4">
          <MainViewTable />
          <button className=" transition-all mt-4 text-lg text-rose-500 ring-rose-400 ring-1 bg-rose-50 p-4 rounded-lg flex items-center justify-center w-full gap-2">
            <Icon icon="eva:plus-outline" className="h-4 w-4" />
            <p>اضافة رصيد افتتاحي</p>
          </button>
        </section>
        <MinViewSummary />
      </div>
    </main>
  );
};
