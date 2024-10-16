import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/categoryList";
import Featured from "@/components/featured/Featured";
import Pagination from "@/components/pagination/Pagination";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <CardList />
      <Pagination />
    </div>
  );
}
