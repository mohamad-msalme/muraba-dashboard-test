import React from "react";
import { Icon } from "@iconify/react";

export const MinViewSummary: React.FC = () => {
  return (
    <section className=" flex-1 flex flex-col gap-6">
      <div className=" flex gap-2 flex-wrap">
        <div className=" shadow-md transition-all p-4 group flex-col gap-4 ring-1 group ring-gray-100 flex-1 rounded-lg hover:bg-rose-50">
          <div className=" flex gap-4 items-center">
            <div className=" flex items-center justify-center rounded-lg w-9 h-9  text-rose-400 bg-gray-200 group-hover:bg-rose-100">
              <Icon icon="eva:info-outline" className=" w-5 h-5" />
            </div>
            <div className=" flex flex-col gp-2">
              <p className=" text-sm font-serif text-slate-500">
                اجمالي المدين الكلي بالدينار العراقي
              </p>
              <p className=" font-medium  text-2xl">20,000 د ع</p>
            </div>
          </div>
          <p className=" text-end mt-4 font-serif text-slate-500">مدين</p>
        </div>
        <div className=" shadow-md p-4 group flex-col gap-4 ring-1 group ring-gray-100 flex-1 rounded-lg hover:bg-rose-50">
          <div className=" flex gap-4 items-center">
            <div className=" flex items-center justify-center rounded-lg w-9 h-9  text-rose-400 bg-gray-200 group-hover:bg-rose-100">
              <Icon icon="eva:info-outline" className=" w-5 h-5" />
            </div>
            <div className=" flex flex-col gp-2">
              <p className=" text-sm font-serif text-slate-500">
                اجمالي المدين الكلي بالدينار العراقي
              </p>
              <p className=" font-medium  text-2xl ">20,000 د ع</p>
            </div>
          </div>
          <p className=" text-end mt-4 font-serif text-slate-500">دائن</p>
        </div>
      </div>
      <div className=" transition-all shadow-md rounded-lg p-4 flex flex-col bg-rose-50 ring-1 ring-gray-100 hover:bg-rose-100">
        <p className="font-serif text-slate-500">الصافي الكلي</p>
        <p className=" font-medium  text-2xl">20,000 د ع</p>
        <p className=" self-end mt-2 font-serif text-slate-500">دائن</p>
      </div>
    </section>
  );
};
