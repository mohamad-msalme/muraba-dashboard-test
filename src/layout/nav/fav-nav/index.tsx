import React from "react";
import { FavIcon } from "../../../components/icons";
import { usePathname } from "../../../routes";
import { findNavItem } from "../../../utils";
import { useLocalStorage } from "../../../hooks";
import { navConfig, NavConfig } from "../config";
import { LOCAL_STORAGE_FAV_LIST } from "../../../constants";

export const NavBarFavouritList: React.FC = () => {
  const [state, updateState] = useLocalStorage<NavConfig[]>(
    LOCAL_STORAGE_FAV_LIST,
    []
  );

  const pathName = usePathname();

  const handelAddClick = () => {
    const isExist = state.find((item) => item.path === pathName);
    if (isExist) return;

    const nav = findNavItem(navConfig, pathName);
    if (nav) {
      updateState([...state, nav]);
    }
  };

  const handelRemoveClick = (path: string) => {
    const removedItem = state.find((item) => item.path === path)!;
    const newItem = state.filter((item) => item.path !== removedItem.path);
    updateState(newItem);
  };

  return (
    <div className=" flex flex-col gap-4">
      <p className=" text-lg font-medium">المفضلة</p>
      <div className=" flex gap-4 flex-wrap">
        {state.map((item) => (
          <FavIcon
            removable
            key={item.path}
            icon={item.icon}
            path={item.path}
            onRemoveClick={handelRemoveClick}
          />
        ))}
        <FavIcon
          path="addIcon"
          onClick={handelAddClick}
          icon="eva:plus-outline"
        />
      </div>
      <hr />
    </div>
  );
};
