import React from "react";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

export default function Menu(props) {
  // let { state } = props;
  // let idiom = useSelector((state) => state.idiom);

  return (
    <div className={styles.menu}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.navActivety : styles.link
        }
      >
        <AiOutlineHome />
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? styles.navActivety : styles.link
        }
      >
        <BiBook />
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? styles.navActivety : styles.link
        }
      >
        <RiServiceLine />
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? styles.navActivety : styles.link
        }
      >
        <BiMessageSquareDetail />
      </NavLink>
    </div>
  );
}
