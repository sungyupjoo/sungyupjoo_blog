import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { CategoryType } from "@/types/types";
import { coding, food, music, travel } from "@/assets/images";
import { art } from "@/assets/images";

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/categories`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();
  return data;
};

const categoryImage = {
  coding: coding,
  music: music,
  art: art,
  food: food,
  travel: travel,
};

const CategoryList = async () => {
  const data: CategoryType[] = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        {data?.map((category: CategoryType) => (
          <Link
            key={category._id}
            href={`/blog?cat=${category.slug}`}
            className={`${styles.category} ${styles[category.slug]}`}
          >
            <Image
              className={styles.image}
              src={categoryImage[category.slug as keyof typeof categoryImage]}
              alt=""
              width={50}
              height={50}
            />
            {category.slug}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
