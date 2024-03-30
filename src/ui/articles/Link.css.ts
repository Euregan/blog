import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const link = style({
  color: theme.colors.accent,
  fontWeight: 500,
  transition: theme.transition,
  display: "inline-flex",
  alignItems: "center",
  gap: "0.2em",
  ":hover": {
    color: "white",
  },
});
