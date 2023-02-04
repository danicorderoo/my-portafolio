import React, { useRef } from "react";
import styles from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useSelector } from "react-redux";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function Contact(props) {
  let idiom = useSelector((state) => state.idiom);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kdcbavp",
        "template_j6qxtu7",
        form.current,
        "rRB5iOkfzf57GUQXp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    idiom
      ? Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your email was sent",
          showConfirmButton: false,
          timer: 1500,
        })
      : Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Su correo fue enviado",
          showConfirmButton: false,
          timer: 1500,
        });

    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <MdOutlineEmail className={styles.contact__option_icon} />
            <h4>Email</h4>
            <h5>soydcordero@gmail.com</h5>
            <a
              href="mailto:soydcordero@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {idiom ? "Send a message" : "Enviar un mensaje"}
            </a>
          </article>

          <article className={styles.contact__option}>
            <BsWhatsapp className={styles.contact__option_icon} />
            <h4>Whatsapp</h4>
            <h5>+589008319</h5>
            <a
              href="https://api.whatsapp.com/send?phone=589008319"
              target="_blank"
              rel="noreferrer"
            >
              {idiom ? "Send a message" : "Enviar un mensaje"}
            </a>
          </article>
        </div>

        <div className={styles.containerForm}>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder={idiom ? "Your Full Name" : "Tu Nombre Completo"}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={idiom ? "Your Email" : "Tu Email"}
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder={idiom ? "Your Message" : "Tu Mensaje"}
              required
            ></textarea>
            <button type="submit" className={styles.botton}>
              {idiom ? "Send message" : "Enviar mensaje"}
            </button>
          </form>
        </div>

        <div className={styles.photo}></div>

        <div className={styles.mensaje}>
          <h1>PLAY</h1>
        </div>
      </div>
    </div>
  );
}
