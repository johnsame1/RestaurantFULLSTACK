import React, { useState } from "react";
import Banner from "../Components/Home/Banner/Banner";
import OurMenu from "../Components/Home/OurMenu/OurMenu";
import Provide from "../Components/Home/Provide/Provide";
import Services from "../Components/Home/Services/Services";
import Delivery from "../Components/Home/Delivery/Delivery";
import OurCustomer from "../Components/Home/OurCustomer/OurCustomer";
import OurBlogs from "../Components/Home/OurBlogs/OurBlogs";

const Home = () => {
  


  return (
    <>
      <Banner />
      <OurMenu/>
      <Provide/>
      <Services/>
      <Delivery/>
      <OurCustomer/>
      <OurBlogs/>
    </>
  );
};

export default Home;
