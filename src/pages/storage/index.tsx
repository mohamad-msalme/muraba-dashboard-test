import React from "react";
import { Helmet } from "react-helmet-async";

export const StoragePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>المستودعات</title>
      </Helmet>
      <header>Header</header>
      <section className=" h-5/6">المستودعات</section>
    </>
  );
};
export default StoragePage;
