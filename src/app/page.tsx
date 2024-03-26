import styles from "./page.module.css";

import SideNav from "@/components/SideNav/SideNav";
import Content from "@/components/Content/Content";

export default function Home() {
  return (
    <main className={styles.main}>
      <SideNav />
      <Content />
    </main>
  );
}
