/* eslint-disable jsx-a11y/alt-text */
import React from "react";

//images
import HTML from "../../assets/image/html.png";
import CSS from "../../assets/image/css.svg";
import javascript from "../../assets/image/javascript.png";
import react from "../../assets/image/react.png";

import redux from "../../assets/image/redux.png";
import posgresql from "../../assets/image/posgresql.png";
import sequelize from "../../assets/image/sequelize.png";
import nodejs from "../../assets/image/nodejs.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "./styles.css";
import { EffectCube, Autoplay } from "swiper";

export default function Cubo(props) {
  const { type, time } = props;
  let imagens;
  switch (type) {
    case "cubo1":
      imagens = [
        {
          tech: "HTML",
          image: HTML,
        },
        {
          tech: "CSS",
          image: CSS,
        },
        {
          tech: "JavaScript",
          image: javascript,
        },
        {
          tech: "React",
          image: react,
        },
      ];
      break;

    case "cubo2":
      imagens = [
        {
          tech: "posgresql",
          image: posgresql,
        },
        {
          tech: "sequelize",
          image: sequelize,
        },
        {
          tech: "nodejs",
          image: nodejs,
        },
        {
          tech: "Redux",
          image: redux,
        },
      ];
      break;

    case "cubo3":
      imagens = [
        {
          tech: "HTML",
          image: HTML,
        },
        {
          tech: "CSS",
          image: CSS,
        },
        {
          tech: "JavaScript",
          image: javascript,
        },
        {
          tech: "React",
          image: react,
        },
      ];
      break;

    default:
      break;
  }

  return (
    <>
      <Swiper
        effect={"cube"}
        autoplay={{
          delay: time,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[EffectCube, Autoplay]}
        className="mySwiper"
      >
        {imagens.map((skill) => {
          return (
            <SwiperSlide>
              <img src={skill.image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
