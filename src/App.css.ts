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

globalStyle("h1, h2", {
  margin: 0,
});

export const contentWidth = createVar();

export const main = style({
  width: contentWidth,
  margin: "auto",
  display: "flex",
  // The children are in reverse order to make the glass effect of Presentation work when hovering over an article
  flexDirection: "column-reverse",
  gap: "20px",
  vars: {
    [contentWidth]: "1028px",
  },
});

export const postSectionTitle = style({
  padding: "0 40px",
});
