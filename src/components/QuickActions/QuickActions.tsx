import styles from "./QuickActions.module.css";

import Customers from "../Customers/Customers";
import MakeAnOrder from "../MakeAnOrder/MakeAnOrder";

const { container, title, content } = styles;

export default function QuickActions() {
  return (
    <section className={container}>
      <span className={title}>Acciones rápidas</span>
      <div className={content}>
        <Customers />
        <MakeAnOrder />
      </div>
    </section>
  );
}
