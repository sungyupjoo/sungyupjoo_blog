import Image from "next/image";
import styles from "./singlePage.module.css";
import logo from "@/app/icon.png";
import Menu from "@/components/menu/Menu";
import { p1 } from "@/assets/images";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>title</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={logo} alt="" fill className={styles.image} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>sungyup</span>
              <span className={styles.date}>2024.10.16</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={p1} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              unde ratione fuga nam voluptatibus mollitia et id sint quo, ipsum
              rerum facere excepturi perferendis similique maiores nostrum
              suscipit commodi nihil!
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
