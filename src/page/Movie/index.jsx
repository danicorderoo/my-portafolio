import React from "react";
import styles from "./Movie.module.css";
import Reproductor from "../../components/Reproductor";

export default function Movie(props) {
  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
      <Reproductor />
    </div>
  );
}
