import { Link, useLocation } from "wouter";
import * as styles from "./Article.css";
import { ReactNode, useEffect } from "react";
import { useBackgroundStore } from "./stores";

type Props = {
  title: string;
  link: string;
  illustration: string;
  children: ReactNode;
};

const Article = ({ title, link, illustration, children }: Props) => {
  const [location] = useLocation();
  const { setBackground } = useBackgroundStore();

  useEffect(() => {
    if (location === link) {
      setBackground(`url('${illustration}')`);
    }
  }, [link, location, setBackground, illustration]);

  return (
    <article
      className={location === link ? styles.article.full : styles.article.list}
    >
      <img src={illustration} className={styles.illustration} />
      <h2 className={styles.title}>{title}</h2>
      <section className={styles.content}>{children}</section>

      <Link href={link}>
        <a className={styles.link}>
          <span className={styles.linkText}>{title}</span>
        </a>
      </Link>
    </article>
  );
};

export default Article;
