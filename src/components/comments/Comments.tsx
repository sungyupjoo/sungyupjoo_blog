import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { logo } from "@/assets/images";
import { authenticationStatus } from "@/types/types";

const Comments = () => {
  const status: authenticationStatus = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment" className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={logo}
              className={styles.image}
              width={50}
              height={50}
              alt=""
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>1 day ago</span>
            </div>
          </div>
          <p className={styles.description}>This is a comment</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={logo}
              className={styles.image}
              width={50}
              height={50}
              alt=""
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>1 day ago</span>
            </div>
          </div>
          <p className={styles.description}>This is a comment</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
