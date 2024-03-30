import { style } from "@vanilla-extract/css";
import { mainPagePadding } from "../App.css";

export const columns = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 30,
  padding: `0 ${mainPagePadding}`,
});
