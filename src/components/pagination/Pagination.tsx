"use client";

import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({
  page,
  hasPrev,
  hasNext,
}: {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`/posts?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => router.push(`/posts?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
