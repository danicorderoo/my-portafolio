import React from "react";
import styles from "./About.module.css";
import { useSelector } from "react-redux";
import Cubo from "../../components/Cubo";
import { BsPatchCheckFill } from "react-icons/bs";

export default function About(props) {
  let idiom = useSelector((state) => state.idiom);

  return (
    <div>
      <div className={styles.experience__container}>
        <div className={styles.experience__frontend}>
          <h3>Frontend Development</h3>

          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h4>HTML</h4>
                <small className={styles.text_light}>Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h4>CSS</h4>
                <small className={styles.text_light}>Intermediate</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h4>JavaScript</h4>
                <small className={styles.text_light}>Intermediate</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h4>Bootstrap</h4>
                <small className={styles.text_light}>Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h4>React</h4>
                <small className={styles.text_light}>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className={styles.experience__backend}>
          <h3>Backend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h1>Java</h1>
                <small className={styles.text_light}>Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h1>MySQL</h1>
                <small className={styles.text_light}>Intermediate</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h1>Python</h1>
                <small className={styles.text_light}>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.cubo1}>
          <Cubo type="cubo1" time="1700" />
        </div>
        <div className={styles.cubo2}>
          <Cubo type="cubo2" time="2100" />
        </div>
        <div className={styles.cubo3}>
          <Cubo type="cubo3" time="1100" />
        </div>
      </div>

      <div className={styles.mensaje}>
        {idiom ? <h1>THINK</h1> : <h1>PIENSA</h1>}
      </div>
    </div>
  );
}
