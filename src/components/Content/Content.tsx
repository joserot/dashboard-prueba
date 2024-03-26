import styles from "./Content.module.css";

import Header from "../Header/Header";

const { container } = styles;

export default function Content() {
  return (
    <div className={container}>
      <Header />
    </div>
  );
}
