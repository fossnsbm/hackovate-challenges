import { Inter } from "next/font/google";
import styles from "./CardHolder.module.scss";

const inter = Inter({ subsets: ["latin"] });

function CardHolder({ children }: { children: React.ReactNode }) {
  return <div className={styles.CardHolder}>{children}</div>;
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className={`${styles.Card} ${inter.className}`}>{children}</div>;
}

Card.style = styles;

CardHolder.Card = Card;
CardHolder.style = styles;

export default CardHolder;
export { CardHolder, Card };
