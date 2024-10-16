"use client";

import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { instagram, github, youtube, naver, resume } from "@/assets/images";
import AuthLinks from "../authLinks/authLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { useState } from "react";
import Socials from "../socials/Socials";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Socials />
      <div className={styles.logo}>sungyup's</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <AuthLinks />
      </div>
      {open && (
        <div className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
