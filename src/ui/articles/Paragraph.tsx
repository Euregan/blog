import { ReactNode } from "react";
import { Language, useLanguage } from "../../hooks/useLanguage";
import * as styles from "./Paragraph.css";

type Props = {
  children: Record<Language, ReactNode>;
};

const Paragraph = ({ children }: Props) => {
  const { language } = useLanguage();

  return <p className={styles.paragraph}>{children[language]}</p>;
};

export default Paragraph;
