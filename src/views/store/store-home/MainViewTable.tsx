import React from "react";
import { Icon } from "@iconify/react";

export const MainViewTable: React.FC = () => {
  return (
    <div className="overflow-x-auto custom-scrollbar relative shadow-md sm:rounded-lg max-h-[500px] overflow-y-auto">
      <table className="w-full text-sm text-right ">
        <thead className="text-base  uppercase bg-gray-100 sticky top-0 ">
          <tr>
            <th scope="col" className="py-4 px-6">
              العدد
            </th>
            <th scope="col" className="py-3 px-6">
              <div className=" flex justify-between items-center">
                <p>الرصبد الافتتاحي</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("first");
                  }}
                >
                  <Icon
                    icon="eva:arrow-up-fill"
                    className=" text-black w-5 h-5"
                  />
                </button>
              </div>
            </th>
            <th scope="col" className="py-3 px-6">
              <div className=" flex justify-between items-center">
                <p> الحالة</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("first");
                  }}
                >
                  <Icon
                    icon="eva:arrow-down-fill"
                    className=" text-black w-5 h-5"
                  />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 20 }, (_, index) => (
            <tr
              className="bg-white text-base font-bold hover:bg-gray-100 transition-all"
              key={index}
            >
              <td className="py-4 px-6">{index + 1}</td>
              <td className="py-4 px-6">1,900,000 ر.س</td>
              <td className="py-4 px-6">
                <select className="block w-full text-base text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>مدين</option>
                  <option>دائن</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
