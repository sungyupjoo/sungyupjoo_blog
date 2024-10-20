import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import { PostType } from "@/types/types";

const getData = async (page: number, cat?: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await res.json();
  return data;
};

const CardList = async ({ page, cat }: { page: number; cat?: string }) => {
  const { posts, count } = await getData(page, cat);
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((post: PostType) => (
          <Card key={post._id} item={post} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
