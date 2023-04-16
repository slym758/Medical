import * as React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../App.css";

import img1 from "../../assets/HomeImg.png";
import img2 from "../../assets/HomeImg2.png";
import img3 from "../../assets/HomeImg3.png";
import ProductTabOne from "./ProductTabOne";
import ProductTabTwo from "./ProductTabTwo";
import ProductTabThree from "./ProductTabThree";
import ProductTabFour from "./ProductTabFour";

function HomeProduct() {
  return (
    <div>
      <div className="title">
        <h2 className="title_content">Ürünlerimiz</h2>
        <div className="title_information">
          <p>Sağlık alanındaki ürünlerimiz.</p>
        </div>
      </div>
      <Tabs
        defaultActiveKey="ilaç"
        id="justify-tab-example"
        className="mb-3 container tab "
        justify
      >
        <Tab
          eventKey="ilaç"
          title={
            <div className="icon-remove ">
              <img className="tab_icon" src={img1}></img>

              <h3>İlaçlar</h3>
            </div>
          }
        >
          <ProductTabOne />
        </Tab>
        <Tab
          eventKey="cihaz"
          title={
            <div className="icon-remove">
              {<img className="tab_icon" src={img2}></img>}

              <h3>Cihazlar</h3>
            </div>
          }
        >
          <ProductTabTwo />
        </Tab>
        <Tab
          eventKey="ekipman"
          title={
            <div className="icon-remove">
              {<img className="tab_icon" src={img3}></img>}

              <h3>Ameliyat Ürünleri</h3>
            </div>
          }
        >
          <ProductTabThree />
        </Tab>
        <Tab
          eventKey="malzeme"
          title={
            <div className="icon-remove">
              {<img className="tab_icon" src={img1}></img>}

              <h3>Ortopedi Ürünleri</h3>
            </div>
          }
        >
          <ProductTabFour />
        </Tab>
      </Tabs>
    </div>
  );
}

export default HomeProduct;
