import { createVar, style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";
import { mainPagePadding } from "../../App.css";

export const width = createVar();
export const height = createVar();

export const chart = style({
  ...theme.glass,
  borderRadius: theme.borderRadius,
  padding: mainPagePadding,
  display: "flex",
  flexDirection: "column",
  gap: 20,
  fontWeight: 500,
  fontSize: 16,
  lineHeight: 1,
});

export const svg = style({
  width: "100%",
  aspectRatio: `${width} / ${height}`,
});
