import React from "react";
import styles from "./CardProject.module.css";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

export default function CardProject(props) {
  const { title, video, data, app } = props;

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <ReactPlayer url={video} controls playing width="100%" height="50%" S />
      <h4 className={styles.texto}>{data}</h4>
      <a className={styles.botton} href={app} target="_blank" rel="noreferrer">
        <BsFillArrowUpRightSquareFill />
      </a>
    </div>
  );
}
