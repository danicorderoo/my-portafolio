import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import styles from "./Reproductor.module.css";

export default function Reproductor(props) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <ReactPlayer
        url="https://youtu.be/fuTZaZbjXlU"
        width="100%"
        height="100%"
        playing
        onEnded={() => {
          navigate("/");
        }}
      />
    </div>
  );
}