import React from "react";
import { Icon } from "@iconify/react";
import { cn } from "../../../utils/cn";
import { NavConfig } from "../config";
import { paths, useRouter } from "../../../routes";
import { ChildListItem } from "./ChildListItem";
import { useMatch } from "react-router-dom";

export const NavListItem: React.FC<NavConfig> = ({
  path,
  label,
  icon,
  children = [],
}) => {
  const { push } = useRouter();
  const isActive = useMatch({ path, end: path === paths.dashboard.root });

  return (
    <li
      onClick={() => push(`${path}`)}
      className={cn(
        "flex gap-4 p-3 group cursor-pointer  items-center hover:bg-orange-100 rounded transition-all",
        {
          "bg-orange-100": isActive,
          " relative ": Boolean(children?.length),
        }
      )}
    >
      <div className=" w-5 h-5">
        <Icon
          icon={icon}
          className={cn(" w-5 h-5 text-gray-800 group-hover:text-orange-400", {
            "text-orange-400": isActive,
          })}
        />
      </div>
      <p className="flex-1">{label}</p>
      <div
        className={cn(
          "absolute transition-all p-4 translate-x-[-3px] right-full top-[-10px] hidden  bg-white shadow-lg min-w-[350px] mt-px rounded",
          {
            "hover:block group-hover:block": Boolean(children?.length),
          }
        )}
      >
        <div className=" flex flex-wrap gap-2">
          {children.map((item) => (
            <ChildListItem {...item} key={item.path + item.label} />
          ))}
        </div>
      </div>
    </li>
  );
};
