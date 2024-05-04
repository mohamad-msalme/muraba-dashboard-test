import React from "react";
import { Icon } from "@iconify/react";
import { cn } from "../../../utils/cn";
import { NavConfig } from "../config";
import { paths, useRouter } from "../../../routes";
import { useMatch } from "react-router-dom";

export const ChildListItem: React.FC<NavConfig> = ({ path, label, icon }) => {
  const { push } = useRouter();
  const isActive = useMatch({ path, end: path === paths.dashboard.root });

  const handelClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    push(`${path}`);
  };

  return (
    <div
      onClick={handelClick}
      className={cn(
        "flex gap-3 p-2 hover:bg-rose-50 cursor-pointer items-center rounded-lg",
        {
          "bg-rose-50": isActive,
        }
      )}
    >
      <div className=" bg-rose-100 w-7 h-7 p-1 rounded-lg">
        <Icon icon={icon} className=" w-5 h-5 text-rose-400 " />
      </div>
      <p> {label}</p>
    </div>
  );
};
