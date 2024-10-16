import Image from "next/image";
import styles from "./footer.module.css";
import logo from "@/app/icon.png";
import { instagram, youtube } from "@/assets/images";
import Socials from "../socials/Socials";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={50} height={50} />
          <h1 className={styles.logoText}>sungyup's</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi eos
          eum maiores delectus
        </p>
        <Socials />
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Coding</Link>
          <Link href="/">Music</Link>
          <Link href="/">Art</Link>
          <Link href="/">Food</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Portfolio</Link>
          <Link href="/">Youtube</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Naver</Link>
          <Link href="/">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
