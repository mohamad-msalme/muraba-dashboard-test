import React from "react";
import { cn } from "../../../utils/cn";
import { useMatch } from "react-router-dom";
import { useRouter } from "../../../routes";

type NavBarOpenListItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  path: string;
};
export const NavBarOpenListItem: React.FC<
  React.PropsWithChildren<NavBarOpenListItemProps>
> = ({ className, path, ...other }) => {
  const { push } = useRouter();
  const isActive = useMatch(path);
  return (
    <li
      onClick={() => push(path)}
      className={cn(
        " transition-all cursor-pointer p-2 bg-gray-100 text-rose-400 font-medium rounded-md hover:text-rose-500 hover:bg-gray-200",
        { "text-rose-500 bg-gray-200": Boolean(isActive) },
        className
      )}
      {...other}
    />
  );
};
