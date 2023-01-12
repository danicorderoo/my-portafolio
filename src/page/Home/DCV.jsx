/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CV from "../../assets/icons/menu.png";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DCV = () => {
  let idiom = useSelector((state) => state.idiom);
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/contact");
  };

  return (
    <div className={styles.cta}>
      <a href={CV} download className={styles.btn}>
        {idiom ? "Download CV" : "Descargar CV"}
      </a>
      <a onClick={handleclick} className={styles.btn}>
        {idiom ? "Let's Talk" : "Contactame"}
      </a>
    </div>
  );
};

export default DCV;
