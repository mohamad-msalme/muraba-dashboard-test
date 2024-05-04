import React from "react";
import { NavBarList } from "./nav-list";
import { NavBarFooter } from "./nav-footer";
import { NavBarListOpened } from "./nav-open-list";
import { NavBarFavouritList } from "./fav-nav";

export const NavBar: React.FC = () => {
  return (
    <nav className=" basis-60  bg-slate-50 p-4 flex flex-col gap-4 shadow-sm">
      <NavBarFavouritList />
      <NavBarList />
      <NavBarListOpened />
      <NavBarFooter />
    </nav>
  );
};
