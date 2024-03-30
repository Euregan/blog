import { ReactNode } from "react";
import * as style from "./Stack.css";

type StackProps = {
  children: ReactNode;
};

const Stack = ({ children }: StackProps) => (
  <div className={style.stack}>{children}</div>
);

export default Stack;
