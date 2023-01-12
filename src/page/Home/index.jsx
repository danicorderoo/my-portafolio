import React from "react";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import { GlitchText } from "glitch-text";
import { useNavigate } from "react-router-dom";
import DCV from "./DCV";

export default function Home(props) {
  let idiom = useSelector((state) => state.idiom);
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.texto}>
          {idiom ? (
            <div>
              <h2>Hi, I ' am</h2>
              <div style={{ fontSize: "140px", fontFamily: "subTitulo" }}>
                <GlitchText theme="blue" text={"DanieL CorderO"} />
              </div>
              <h2>Developer Full Stack</h2>
            </div>
          ) : (
            <div>
              <h2>Hola, Yo ' soy</h2>
              <div style={{ fontSize: "140px", fontFamily: "subTitulo" }}>
                <GlitchText theme="blue" text={"DanieL CorderO"} />
              </div>
              <h2>Desarrollador Full Stack</h2>
            </div>
          )}
        </div>
        <div className={styles.movie}>
          <button
            className={styles.btnNeon}
            onClick={() => {
              navigate("/movie");
            }}
          ></button>
        </div>
        <div className={styles.botones}>
          <DCV />
        </div>
        {idiom ? <span>catch me△</span> : <span>capturame△</span>}
      </div>

      <div className={styles.mensaje}>
        {idiom ? <h1>WELCOME</h1> : <h1>BIENVENIDO</h1>}
      </div>
    </div>
  );
}
