import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import p1 from "@/assets/images/p1.jpeg";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        안녕하세요,
        <br />
        주성엽의 블로그입니다
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={p1} alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
