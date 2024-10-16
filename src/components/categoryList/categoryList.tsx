import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { art, coding, food, music, travel } from "@/assets/images";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=coding"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            className={styles.image}
            src={coding}
            alt=""
            width={50}
            height={50}
          />
          coding
        </Link>
        <Link
          href="/blog?cat=music"
          className={`${styles.category} ${styles.music}`}
        >
          <Image
            className={styles.image}
            src={music}
            alt=""
            width={50}
            height={50}
          />
          music
        </Link>
        <Link
          href="/blog?cat=art"
          className={`${styles.category} ${styles.art}`}
        >
          <Image
            className={styles.image}
            src={art}
            alt=""
            width={50}
            height={50}
          />
          art
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            className={styles.image}
            src={food}
            alt=""
            width={50}
            height={50}
          />
          food
        </Link>
        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            className={styles.image}
            src={travel}
            alt=""
            width={50}
            height={50}
          />
          travel
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
