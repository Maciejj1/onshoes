import React, { useState, useRef, useEffect } from "react";
import first from "../assets/first.png";
import second from "../assets/secondplacement.png";
import "./Productplace.scss";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  "https://iv.pl/images/ec3854fce529868cd0bc5b78198c0bf8.png",
  "https://iv.pl/images/d1ef944dae3f496e0c70b50b81911934.png",
  "https://www.telepolis.pl/images/2020/11/black-friday-2020-najlepsze-okacje-promocje-lista.jpg",
];
const ProductPlacement = () => {
  return (
    <div className="placement-container">
      <div className="placement-base">
        <div className="placement-images">
          <Fade>
            <div className="each-slide">
              <img src={images[0]} />
            </div>
            <div className="each-slide">
              <img src={images[1]} />
            </div>
            <div className="each-slide">
              <img src={images[2]} />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ProductPlacement;
