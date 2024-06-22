"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  // fetch요청으로 보낼 데이터 onChange로 state관리
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContents, setBoardContents] = useState('');

  // 게시물 저장 이벤트
  const board_submit = async() => {
    try {
      console.log(boardTitle);
      console.log(boardContents);
      const response = await fetch('/api/boards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: boardTitle, contents: boardContents }),
      });
    } catch (error) {
      console.log("fetch요청 실패욘",error);
    }
  }

  return (
    <div className={styles.board_table}>
      <input type="text" id="board_title" placeholder="title" className={styles.board_title} value={boardTitle} onChange={(e) => setBoardTitle(e.target.value)}/>
      <input type="text" id="board_contents" placeholder="contents" className={styles.board_contents} value={boardContents} onChange={(e) => setBoardContents(e.target.value)}/>
      <button type="button" onClick={board_submit}>저장</button>
    </div>
  );
}
