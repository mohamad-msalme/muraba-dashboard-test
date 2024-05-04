import React from "react";
import { SideView } from "./SideView";
import { MainView } from "./MainView";

export const StoreHomeView: React.FC = () => {
  return (
    <section className=" h-full w-[95%] mx-auto flex gap-4">
      <SideView />
      <MainView />
    </section>
  );
};
