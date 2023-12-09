import { ReactNode } from "react";
import * as styles from "./Paragraph.css";

type Props = {
  children: ReactNode;
};

const Paragraph = ({ children }: Props) => (
  <p className={styles.paragraph}>{children}</p>
);

export default Paragraph;
