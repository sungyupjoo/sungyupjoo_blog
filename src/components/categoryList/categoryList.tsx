import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { art, coding, food, music, travel } from "@/assets/images";
import { categoryList } from "@/types/types";

const categoryImage = {
  coding: coding,
  music: music,
  art: art,
  food: food,
  travel: travel,
};

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        {categoryList.map((category) => (
          <Link
            href={`/blog?cat=${category}`}
            className={`${styles.category} ${styles[category]}`}
            key={category}
          >
            <Image
              className={styles.image}
              src={categoryImage[category]}
              alt=""
              width={50}
              height={50}
            />
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
