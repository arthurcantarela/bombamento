import React, { Fragment } from "react";
import "./Resultado.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Bomba } from "components";

const Resultado = ({ bombas, redo, ...rest }) => (
  <Fragment>
    <ul class="BombaSlider">
      <Slider
        settings={{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }}
      >
        {bombas.map((bomba, i) => <Bomba key={i} {...bomba} />)}
      </Slider>
    </ul>
    <div>
      TOTAL: {bombas.reduce((total, bomba) => total + bomba.credits, 0)}
    </div>
    <button onClick={redo}>Refazer</button>
  </Fragment>
);

export default Resultado;
