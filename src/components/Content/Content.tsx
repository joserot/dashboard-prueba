import styles from "./Content.module.css";

import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import QuickActions from "../QuickActions/QuickActions";

const { container } = styles;

export default function Content() {
  return (
    <div className={container}>
      <Header />
      <Cards />
      <QuickActions />
    </div>
  );
}
