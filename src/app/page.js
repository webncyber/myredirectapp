import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    
      <div className={styles.center}>
      <h1>
          Welcome to &nbsp;
          <code className={styles.code}>MyResearchCenter.com!</code>
        </h1>
      </div>
    </main>
  );
}
