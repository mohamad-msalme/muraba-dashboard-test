import React from "react";
import { useRouter } from "../routes";

const NotFoundPage: React.FC = () => {
  const { push } = useRouter();
  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100"
      dir="rtl"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-600 mt-4">
          عذرًا! الصفحة التي تبحث عنها غير موجودة.
        </p>
        <p className="text-md text-gray-500 mt-2">
          قد تكون قد أدخلت عنوانًا خاطئًا، أو قد تكون الصفحة قد نُقلت.
        </p>
        <button
          onClick={() => push("/")}
          className="mt-6 px-6 py-2 text-sm font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600"
        >
          العودة إلى الصفحة الرئيسية
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
