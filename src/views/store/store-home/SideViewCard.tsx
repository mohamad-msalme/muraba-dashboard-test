import React from "react";

type SideViewCardProps = {
  title: string;
  text: string;
};
export const SideViewCard: React.FC<
  React.PropsWithChildren<SideViewCardProps>
> = ({ children, title, text }) => {
  return (
    <div className="  transition-all cursor-pointer ring-gray-200 ring-1 rounded-xl px-3 py-4 flex flex-col gap-4 hover:bg-fuchsia-50 hover:ring-fuchsia-300">
      <p className=" font-medium text-lg">{title}</p>
      <p className=" text-base text-slate-500">{text}</p>
      {children}
    </div>
  );
};
