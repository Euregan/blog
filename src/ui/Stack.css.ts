import { style } from "@vanilla-extract/css";
import { gap } from "../theme.css";

export const stack = style({
  display: "flex",
  flexDirection: "column",
  gap: gap,
});
