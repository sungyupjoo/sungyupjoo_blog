import { p1 } from "@/assets/images";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={p1} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>2024.10.16 - </span>
          <span className={styles.category}>music</span>
        </div>
        <h2 className={styles.title}>Lorem ipsum dolor sit,</h2>
        <p className={styles.description}>
          amet consectetur adipisicing elit. Delectus in corporis dolorem,
          similique totam consequatur sequi suscipit dolor fugiat inventore
          dicta incidunt esse veniam nisi, quidem optio enim, quam doloribus.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
