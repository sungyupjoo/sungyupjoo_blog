import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* 인기글 */}
      <h2 className={styles.subtitle}>인기 게시물</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts includeImage={false} />
      {/* 토픽별 게시물 */}
      <h2 className={styles.subtitle}>토픽별 게시물</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      {/* 고정글 */}
      <h2 className={styles.subtitle}>고정글</h2>
      <h1 className={styles.title}>Fixed Posts</h1>
      <MenuPosts includeImage={true} />
    </div>
  );
};

export default Menu;
