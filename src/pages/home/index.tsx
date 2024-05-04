import React from "react";
import { Helmet } from "react-helmet-async";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>الرئيسية</title>
      </Helmet>
      <header>Header</header>
      <section className=" h-5/6">الرئيسية</section>
    </>
  );
};
export default HomePage;
