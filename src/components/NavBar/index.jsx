import React from "react";
import styles from "./NavBar.module.css";
import Menu from "../Menu";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as actions from "../../store/actions";
import Swal from "sweetalert2";
import "animate.css";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";

export default function NavBar(props) {
  let dispatch = useDispatch();
  const [idiom, setIdiom] = useState(false);
  let idioma = useSelector((state) => state.idiom);

  const onChangeIdiom = () => {
    idiom ? setIdiom(false) : setIdiom(true);
    dispatch(actions.setIdiom(idiom));
  };

  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <Menu />
        <div className={styles.botonera}>
          <button
            className={idiom ? styles.idiomBottonOff : styles.idiomBottonOn}
            name="idiom"
            onClick={() => onChangeIdiom()}
          ></button>
        </div>
      </div>
      {idioma ? (
        <button
          className={styles.infoBotton}
          name="info"
          onClick={() =>
            Swal.fire({
              html: `
              <h1>About me</h1>
              <h3>Hey! I'm Daniel Cordero, PERN stack developer, passionate about programming, enthusiastic about solving programming and design problems.</h3>
              <h3>A true believer in the Kaizen philosophy, which talks about continuous improvement, this year I will dominate my stack, to fully immerse myself in TypeScript.</h3>
              <h4>"Every process can be fun and there is no better way than learning"...</h4>
          `,
              width: 800,
              position: "center-center",
              padding: "3em",
              background: "#0000006d",
              color: "#ffffff",
              showCancelButton: true,
              showConfirmButton: false,
              backdrop: `
    rgba(0, 0, 0, 0.7)
    url("https://giffiles.alphacoders.com/212/212670.gif")
    center center
    no-repeat
  `,
              showClass: {
                popup: "animate__animated animate__backInDown",
              },
              hideClass: {
                popup: "animate__animated animate__backOutUp",
              },
            })
          }
        >
          <AiOutlineUser />
        </button>
      ) : (
        <button
          className={styles.infoBotton}
          name="info"
          onClick={() =>
            Swal.fire({
              html: `
              <h1>Acerca de mí</h1>
              <h3>Hey! Soy Daniel Cordero, Desarrollador del stack PERN, apasionado por la programación, entusiasta a resolver problemas de programación y diseño.</h3>
              <h3>Fiel creyente de la filosofía Kaizen, que habla de la mejora continua, este año dominaré mi stack, para meterme de lleno a TypeScript.</h3>
              <h4>"Todo proceso puede ser divertido y no hay mejor forma que aprendiendo"...</h4>
        `,
              width: 800,
              position: "center-center",
              padding: "3em",
              color: "#ffffff",
              showCancelButton: true,
              showConfirmButton: false,
              background: "#0000006d",
              backdrop: `
        rgba(0, 0, 0, 0.7)
        url("https://giffiles.alphacoders.com/212/212670.gif")
        center center
        no-repeat
      `,
              showClass: {
                popup: "animate__animated animate__backInDown",
              },
              hideClass: {
                popup: "animate__animated animate__backOutUp",
              },
            })
          }
        >
          <AiOutlineUser />
        </button>
      )}
    </div>
  );
}
