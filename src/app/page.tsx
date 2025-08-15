import Image from "next/image";
import styles from "./page.module.css";
import CoverPage from './components/CoverPage'

export default function Home() {
  return (
    <div className={styles.page}>
          <CoverPage />
    </div>
  );
}
