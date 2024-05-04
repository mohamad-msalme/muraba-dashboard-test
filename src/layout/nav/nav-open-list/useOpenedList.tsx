import React from "react";
import { findNavItem } from "../../../utils";
import { usePathname } from "../../../routes";
import { NavConfig, navConfig } from "../config";

export const useOpenedPages = () => {
  const pathname = usePathname();
  const [openedPages, setOpenedPages] = React.useState<NavConfig[]>([]);

  React.useMemo(() => {
    const isExist = openedPages.find((page) => page.path === pathname);
    if (isExist) return;

    const navItem = findNavItem(navConfig, pathname);
    if (navItem) {
      setOpenedPages((prev) => [navItem, ...prev]);
    }
  }, [openedPages, pathname]);

  return openedPages;
};
