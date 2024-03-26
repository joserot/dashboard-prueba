import styles from "./Cards.module.css";

import { cards } from "@/data/cards";

const {
  container,
  cardEl,
  title,
  numberEl,
  numberMoney,
  text,
  percentagePositive,
  percentageNegative,
} = styles;

export default function Cards() {
  return (
    <section className={container}>
      {cards.map((card) => {
        return (
          <div className={cardEl} key={card.title}>
            <span className={title}>{card.title}</span>
            <p className={numberEl}>
              {card.number}{" "}
              {card.isMoney && <span className={numberMoney}>Bs</span>}
            </p>
            <p className={text}>
              <span
                className={
                  card.positive ? percentagePositive : percentageNegative
                }
              >
                {card.percentage}
              </span>{" "}
              En el último mes
            </p>
          </div>
        );
      })}
    </section>
  );
}
