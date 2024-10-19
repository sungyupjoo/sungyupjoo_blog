import { p1 } from "@/assets/images";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { PostType } from "@/types/types";

const Card = ({ item, key }: { item: PostType; key: string }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        {item.img && (
          <Image src={item.img} alt="" fill className={styles.image} />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <h2 className={styles.title}>{item.title}</h2>
        <p className={styles.description}>{item.desc}</p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
