import { style } from "@vanilla-extract/css";
import { mainPagePadding } from "../../App.css";

export const paragraph = style({
  fontSize: 18,
  padding: `0 ${mainPagePadding}`,
});
