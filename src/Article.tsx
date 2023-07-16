import { Link, useLocation } from "wouter";
import * as styles from "./Article.css";
import { ReactNode } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";

type Props = {
  title: string;
  link: string;
  illustration: string;
  children: ReactNode;
};

const Article = ({ title, link, illustration, children }: Props) => {
  const [location] = useLocation();

  return (
    <>
      <article
        className={
          location === link ? styles.article.full : styles.article.list
        }
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
      <div
        style={assignInlineVars({
          [styles.backgroundIllustration]: `url('${illustration}')`,
        })}
        className={styles.background}
      />
    </>
  );
};

export default Article;
