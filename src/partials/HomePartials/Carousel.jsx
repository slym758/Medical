import React from "react";
import Carousel from "react-bootstrap/Carousel";

// import "../App.css";

import image_1 from "../../assets/img_1.jpg";

function slider() {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image_1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image_1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default slider;
