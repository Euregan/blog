import { ReactNode } from "react";
import * as style from "./Box.css";

type BoxProps = {
  children: ReactNode;
};

const Box = ({ children }: BoxProps) => (
  <section className={style.box}>{children}</section>
);

export default Box;
