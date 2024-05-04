import React from "react";
import { Icon } from "@iconify/react";

const BTNS = [
  {
    name: "search",
    icon: "eva:search-outline",
  },
  {
    name: "filter",
    icon: "solar:filter-linear",
  },
  {
    name: "lucide",
    icon: "lucide:filter-x",
  },
];

export const HeaderStore: React.FC = () => {
  const haandelClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const name = e.currentTarget.name;
    switch (name) {
      case BTNS[0].name:
        console.log(name);
        break;
      case BTNS[1].name:
        console.log(name);
        break;
      case BTNS[2].name:
        console.log(name);
        break;
      default:
        console.log("No Action");
    }
  };

  return (
    <>
      <div className=" flex items-center gap-4 ">
        {BTNS.map((btn) => (
          <button
            name={btn.name}
            onClick={(e) => haandelClick(e)}
            className=" transition-all shadow-sm flex items-center justify-center p-2 bg-gray-100 rounded-full hover:bg-gray-50 ring-gray-200 ring-1"
          >
            <Icon icon={btn.icon} className=" w-5 h-5" />
          </button>
        ))}
      </div>
      <div className=" flex gap-4 ">
        <button className="  transition-all rounded-lg  px-4 py-2 text-md ring-white bg-red-400 text-white  hover:bg-red-300">
          اضافة منتج
        </button>
        <button className=" transition-all p-2 ring-gray-300 ring-1 rounded-lg hover:ring-red-300 hover:bg-red-50">
          <Icon icon="eva:plus-outline" className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};
