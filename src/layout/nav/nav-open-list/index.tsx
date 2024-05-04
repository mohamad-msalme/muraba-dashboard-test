import React from "react";
import { useOpenedPages } from "./useOpenedList";
import { NavBarOpenListItem } from "./NavBarOpenListItem";

export const NavBarListOpened: React.FC = () => {
  const openedPages = useOpenedPages();
  return (
    <div className=" flex flex-col gap-4 overflow-y-auto max-h-64 custom-scrollbar">
      <p className="text-lg font-medium">النوافذ المفنوحة</p>
      <ul className=" flex flex-col gap-2">
        {openedPages.map((item) => (
          <NavBarOpenListItem key={item.path} path={item.path}>
            {item.label}
          </NavBarOpenListItem>
        ))}
      </ul>
    </div>
  );
};
