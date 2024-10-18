"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { authenticationStatus } from "@/types/types";

const AuthLinks = () => {
  const status: authenticationStatus = "authenticated";
  const [open, setOpen] = useState(false);

  return (
    <>
      {status === "notAuthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </>
  );
};

export default AuthLinks;
