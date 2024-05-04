import React from "react";
import { NavListItem } from "./NavListItem";
import { navConfig } from "../config";

export const NavBarList: React.FC = () => {
  return (
    <div className=" flex flex-col gap-3">
      <p className="text-lg font-medium">القوائم</p>
      <ul className=" flex flex-col gap-2 cursor-pointer"></ul>
      {navConfig.map((item) => (
        <NavListItem {...item} />
      ))}
      <hr />
    </div>
  );
};
