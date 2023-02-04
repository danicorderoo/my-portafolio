import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import styles from "./Reproductor.module.css";

export default function Reproductor(props) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <ReactPlayer
        url="https://youtu.be/0AQGMFarxMw"
        width="100%"
        height="100%"
        playing
        controls
        volume={50}
        onEnded={() => {
          navigate("/");
        }}
      />
    </div>
  );
}
