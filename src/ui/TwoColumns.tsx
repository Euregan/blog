import { ReactElement } from "react";
import * as style from "./TwoColumns.css";

type TwoColumnsProps = {
  children: [ReactElement, ReactElement];
};

const TwoColumns = ({ children }: TwoColumnsProps) => (
  <div className={style.columns}>{children}</div>
);

export default TwoColumns;
