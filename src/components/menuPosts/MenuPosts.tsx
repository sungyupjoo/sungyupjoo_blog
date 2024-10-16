import Image from "next/image";
import Link from "next/link";
import styles from "./menuPosts.module.css";
import { p1 } from "@/assets/images";

const MenuPosts = ({ includeImage = true }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {includeImage && (
          <div className={styles.imageContainer}>
            <Image src={p1} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.music}`}>music</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet</h3>
          <div className={styles.detail}>
            <span className={styles.date}>2024.10.16 - </span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {includeImage && (
          <div className={styles.imageContainer}>
            <Image src={p1} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.music}`}>music</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet</h3>
          <div className={styles.detail}>
            <span className={styles.date}>2024.10.16 - </span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {includeImage && (
          <div className={styles.imageContainer}>
            <Image src={p1} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>food</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet</h3>
          <div className={styles.detail}>
            <span className={styles.date}>2024.10.16 - </span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {includeImage && (
          <div className={styles.imageContainer}>
            <Image src={p1} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.music}`}>music</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet</h3>
          <div className={styles.detail}>
            <span className={styles.date}>2024.10.16 - </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
