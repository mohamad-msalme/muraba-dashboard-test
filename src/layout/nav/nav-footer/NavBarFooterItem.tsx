import React from "react";
import { cn } from "../../../utils/cn";
import { Icon } from "@iconify/react";

type NavBarFooterItemProps = {
  icon: string;
  boxClassName?: string;
  iconClassName?: string;
};

export const NavBarFooterItem: React.FC<
  React.PropsWithChildren<NavBarFooterItemProps>
> = ({ icon, boxClassName, iconClassName, children }) => (
  <div
    className={cn(
      "cursor-pointer relative bg-gray-200 p-2 rounded-xl w-9 h-9 flex items-center text-gray-800 justify-center hover:bg-gray-100 transition-all",
      boxClassName
    )}
  >
    <Icon icon={`eva:${icon}`} className={cn("w-8 h-8", iconClassName)} />
    {children}
  </div>
);
