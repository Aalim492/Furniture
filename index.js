import { ContactUs } from "@/components/ContactUs";
import Header from "@/components/Header";
import Products from "@/components/Products";
import React from "react";

const index = () => {
  return (
    <>
      <Header />
      <Products/>
      <ContactUs/>
    </>
  );
};

export default index;
