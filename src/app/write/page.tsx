"use client";

import Image from "next/image";
import styles from "./write.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { external, image, plus, video } from "@/assets/images";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src={plus} alt="" width={20} height={20} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src={image} alt="" width={20} height={20} />
            </button>
            <button className={styles.addButton}>
              <Image src={external} alt="" width={20} height={20} />
            </button>
            <button className={styles.addButton}>
              <Image src={video} alt="" width={20} height={20} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="글 쓰기..."
          className={styles.textArea}
        />
      </div>
      <button className={styles.save}>저장</button>
    </div>
  );
};

export default WritePage;
