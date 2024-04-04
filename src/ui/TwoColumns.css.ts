import { style } from "@vanilla-extract/css";
import { mainPagePadding } from "../App.css";
import * as imageStyle from "./articles/Image.css";

export const columns = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 30,
  padding: `0 ${mainPagePadding}`,
  selectors: {
    [`&:has(${imageStyle.figure}:first-child)`]: {
      paddingLeft: 0,
    },
    [`&:has(${imageStyle.figure}:last-child)`]: {
      paddingRight: 0,
    },
  },
});
