import { categoryList } from "@/types/types";
import Link from "next/link";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      {categoryList.map((category) => (
        <Link
          href={`/blog?cat=${category}`}
          className={`${styles.categoryItem} ${styles[category]}`}
          key={category}
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
