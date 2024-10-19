import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/categoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import styles from "./homepage.module.css";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
