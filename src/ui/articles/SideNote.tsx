import { ReactNode } from "react";
import { Language, useLanguage } from "../../hooks/useLanguage";
import * as styles from "./SideNote.css";

type SideNoteProps = {
  children: Partial<Record<Language, ReactNode>>;
};

const SideNote = ({ children }: SideNoteProps) => {
  const { language } = useLanguage();

  return <p className={styles.note}>{children[language]}</p>;
};

export default SideNote;
