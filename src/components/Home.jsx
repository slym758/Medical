import Carousel from "../partials/HomePartials/Carousel";
import CardAbout from "../partials/HomePartials/CardAbout";

import React from "react";
import HomeProduct from "../partials/HomePartials/HomeProduct";

function Home() {
  return (
    <div>
      <Carousel />
      <CardAbout />
      <HomeProduct />
    </div>
  );
}

export default Home;
