import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderStore } from "./HeaderStore";

const LayoutStore: React.FC = () => {
  return (
    <>
      <header className=" bg-slate-50 p-4 flex items-center justify-between shadow-md">
        <HeaderStore />
      </header>
      <section className=" h-5/6">
        <Outlet />
      </section>
    </>
  );
};
export default LayoutStore;
