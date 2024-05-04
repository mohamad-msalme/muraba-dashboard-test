import React from "react";
import { Icon } from "@iconify/react";
import { SideViewCard } from "./SideViewCard";

const sideViewData = [
  {
    title: "المعلومات الاساسية للحساب",
    text: "          الضغط علة هذه يمكنك معرغة معلةمات الحساب ةكافة المعلومات التي تريدها",
  },
  {
    title: "الرصيد الافتتاحي ",
    text: "يمكنك معرفة الرصبد الافتتاحي من هنا ومعرفة كل المعلومات التي تريدها",
  },
  {
    title: "تنبيهات  الحساب",
    text: "من هنا يمكنك مشاهدة الاشعارات الخاصة بك",
  },
  {
    title: "المعلومات الاساسية للحساب",
    text: "          الضغط علة هذه يمكنك معرغة معلةمات الحساب ةكافة المعلومات التي تريدها",
  },
];

export const SideView: React.FC = () => {
  return (
    <aside className=" basis-1/5 bg-slate-50 rounded-xl shadow-md p-4 flex flex-col gap-4">
      {sideViewData.map((item, ind) => (
        <SideViewCard key={ind} {...item}>
          {ind === 0 ? (
            <button className=" self-end w-fit flex items-center gap-2 px-2 py-1 bg-yellow-50 text-yellow-400 border border-yellow-400 rounded">
              <Icon icon="eva:file-outline" className=" w-5 h-5" />
              <p className=" text-base">مفقودة</p>
            </button>
          ) : null}
        </SideViewCard>
      ))}
    </aside>
  );
};
