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
          {idiom ? (
            <h3>Frontend Development</h3>
          ) : (
            <h3>Desarrollador Frontend</h3>
          )}

          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h1>HTML</h1>
                {idiom ? (
                  <small className={styles.text_light}>Experienced</small>
                ) : (
                  <small className={styles.text_light}>Experimentado</small>
                )}
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h1>CSS</h1>
                {idiom ? (
                  <small className={styles.text_light}>Experienced</small>
                ) : (
                  <small className={styles.text_light}>Experimentado</small>
                )}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h1>JavaScript</h1>
                {idiom ? (
                  <small className={styles.text_light}>Intermediate</small>
                ) : (
                  <small className={styles.text_light}>Intermedio</small>
                )}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h1>React</h1>
                {idiom ? (
                  <small className={styles.text_light}>Experienced</small>
                ) : (
                  <small className={styles.text_light}>Experimentado</small>
                )}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h1>Bootstrap</h1>
                {idiom ? (
                  <small className={styles.text_light}>Basic</small>
                ) : (
                  <small className={styles.text_light}>Básico</small>
                )}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h1>Figma</h1>
                {idiom ? (
                  <small className={styles.text_light}>Basic</small>
                ) : (
                  <small className={styles.text_light}>Básico</small>
                )}
              </div>
            </article>
          </div>
        </div>

        <div className={styles.experience__backend}>
          {idiom ? (
            <h3>Backend Development</h3>
          ) : (
            <h3>Desarrollador Backend</h3>
          )}
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h1>JavaScript</h1>
                {idiom ? (
                  <small className={styles.text_light}>Intermediate</small>
                ) : (
                  <small className={styles.text_light}>Intermedio</small>
                )}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h1>Node.js</h1>
                {idiom ? (
                  <small className={styles.text_light}>Intermediate</small>
                ) : (
                  <small className={styles.text_light}>Intermedio</small>
                )}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h1>PostgreSQL</h1>
                {idiom ? (
                  <small className={styles.text_light}>Intermediate</small>
                ) : (
                  <small className={styles.text_light}>Intermedio</small>
                )}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icons} />
              <div>
                <h1>Sequelize</h1>
                {idiom ? (
                  <small className={styles.text_light}>Intermediate</small>
                ) : (
                  <small className={styles.text_light}>Intermedio</small>
                )}
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
