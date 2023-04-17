import Carousel from "../partials/HomePartials/Carousel";
import CardAbout from "../partials/HomePartials/CardAbout";

import React from "react";
import HomeProduct from "../partials/HomePartials/HomeProduct";
import BestProduct from "../partials/HomePartials/BestProduct";

function Home() {
  return (
    <div>
      <Carousel />
      <CardAbout />
      <HomeProduct />

      <BestProduct />
    </div>
  );
}

export default Home;
