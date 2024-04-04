import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";
import { mainPagePadding } from "../../App.css";

export const figure = style({
  all: "unset",
});

export const image = style({
  borderRadius: theme.borderRadius,
  width: "100%",
});

export const caption = style({
  paddingLeft: mainPagePadding,
});
