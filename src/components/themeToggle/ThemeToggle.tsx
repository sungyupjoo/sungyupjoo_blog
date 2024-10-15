"use client";

import { ThemeContext } from "@/app/context/ThemeContext";
import styles from "./themeToggle.module.css";
import moonIcon from "@/assets/images/moon.png";
import sunIcon from "@/assets/images/sun.png";
import Image from "next/image";
import { useContext } from "react";

const ThemeToggle = () => {
  const context = useContext(ThemeContext);
  const theme = context?.theme;
  const toggle = context?.toggle;

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { left: 1, backgroundColor: "white" }
          : { right: 1, backgroundColor: "#0f172a" }
      }
    >
      <Image src={moonIcon} alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <Image src={sunIcon} alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
