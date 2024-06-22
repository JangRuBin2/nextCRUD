"use client";
import styles from "./page.module.css";

export default function Home() {
  const board_submit = () => {
    console.log("test");
  }

  return (
    <div className={styles.board_table}>
      <input type="text" placeholder="title" id="board_title" className={styles.board_title}/>
      <input type="text" placeholder="contents" id="board_contents" className={styles.board_contents}/>
      <button type="button" onClick={board_submit}>저장</button>
    </div>
  );
}
