import { createVar, fontFace, globalStyle, style } from "@vanilla-extract/css";

const muktaMahee = fontFace({
  src: `url(/MuktaMahee-Regular.ttf)`,
});

globalStyle("body", {
  margin: 0,
  background: "black",
  color: "white",
  fontFamily: muktaMahee,
});

export const contentWidth = createVar();

export const main = style({
  width: contentWidth,
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  vars: {
    [contentWidth]: "1028px",
  },
});
