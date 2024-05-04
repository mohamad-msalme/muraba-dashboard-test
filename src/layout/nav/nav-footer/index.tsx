import React from "react";
import { NavBarFooterItem } from "./NavBarFooterItem";

const icons = ["settings-outline", "email-outline"];
export const NavBarFooter: React.FC = () => {
  return (
    <div className=" flex flex-col gap-6">
      <hr />
      <div className=" flex items-center gap-4">
        {icons.map((icon) => (
          <NavBarFooterItem key={icon} icon={icon}>
            {icon === "email-outline" ? (
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500" />
            ) : null}
          </NavBarFooterItem>
        ))}
      </div>
    </div>
  );
};
