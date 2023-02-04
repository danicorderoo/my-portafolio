import React from "react";
import styles from "./Projects.module.css";
import { useSelector } from "react-redux";
import CardProject from "../../components/CardProject";

export default function Projects(props) {
  let idiom = useSelector((state) => state.idiom);
  return (
    <div className={styles.container}>
      {idiom ? (
        <div className={styles.cards}>
          <CardProject
            title="Rick and Morty"
            video="https://youtu.be/Lfo_V1BR1j0"
            data="This SPA was created in REACT, It is aimed at fans of this series, consuming information from the Rick and Morty API, employing ordering and filtering cards through Redux."
            app="https://app-rm.vercel.app/"
          />
          <CardProject
            title="Travell"
            video="https://youtu.be/VEoQSULC9Yo"
            data="This SPA was created in REACT, it is aimed at tourists who are interested in learning about their favorite countries, consuming information from the Countries API, to initialize a PostgreSLQ database, ordering and letter filters through Redux."
            app="https://app-travell.vercel.app/"
          />
        </div>
      ) : (
        <div className={styles.cards}>
          <CardProject
            title="Rick and Morty"
            video="https://youtu.be/Lfo_V1BR1j0"
            data="Esta SPA fue creada en REACT, Va dirigida para fanaticos esta serie, consumiendo información de la API de Rick and Morty, emplie ordenamiento y filtros de cartas por medio de Redux."
            app="https://app-rm.vercel.app/"
          />
          <CardProject
            title="Travell"
            video="https://youtu.be/VEoQSULC9Yo"
            data="Esta SPA fue creada en REACT, va dirigida para turistas que les interesa conocer de sus países favoritos, consumiendo información de la API de Paises, para inicializar una base de datos de PostgreSLQ, ordenamiento y filtros de cartas por medio de Redux."
            app="https://app-travell.vercel.app/"
          />
        </div>
      )}

      <div className={styles.mensaje}>
        <h1>MAKE</h1>
      </div>
    </div>
  );
}
