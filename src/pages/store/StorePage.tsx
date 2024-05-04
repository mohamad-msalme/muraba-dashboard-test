import React from "react";
import { Helmet } from "react-helmet-async";
import { StoreHomeView } from "../../views/store/store-home";

export const StorePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>المتجر الالكتروني</title>
      </Helmet>
      <StoreHomeView />
    </>
  );
};
export default StorePage;
