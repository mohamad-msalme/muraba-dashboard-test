import React from "react";
import { Helmet } from "react-helmet-async";

export const WarehousePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>المخازن</title>
      </Helmet>

      <header>Header</header>
      <section className=" h-5/6">المخازن</section>
    </>
  );
};
export default WarehousePage;
