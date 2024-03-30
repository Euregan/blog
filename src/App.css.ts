import { createVar, fontFace, globalStyle, style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

const muktaMahee = fontFace([
  {
    src: `url(/MuktaMahee-ExtraLight.ttf)`,
    fontWeight: 200,
  },
  {
    src: `url(/MuktaMahee-Light.ttf)`,
    fontWeight: 300,
  },
  {
    src: `url(/MuktaMahee-Regular.ttf)`,
    fontWeight: 400,
  },
  {
    src: `url(/MuktaMahee-Medium.ttf)`,
    fontWeight: 500,
  },
  {
    src: `url(/MuktaMahee-SemiBold.ttf)`,
    fontWeight: 600,
  },
  {
    src: `url(/MuktaMahee-Bold.ttf)`,
    fontWeight: 700,
  },
  {
    src: `url(/MuktaMahee-ExtraBold.ttf)`,
    fontWeight: 800,
  },
]);

globalStyle("body", {
  margin: 0,
  background: "black",
  color: "white",
  fontFamily: muktaMahee,
  fontWeight: 300,
  "@media": {
    print: {
      background: "white",
    },
  },
});

globalStyle("@page", {
  margin: "0mm",
});

globalStyle("a", {
  color: "white",
  textDecoration: "none",
  fontWeight: 500,
  "@media": {
    print: {
      color: "black",
      fontWeight: 400,
    },
  },
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  margin: 0,
  fontWeight: 600,
});

globalStyle("p", {
  margin: 0,
});

globalStyle("pre", {
  display: "inline",
  fontFamily: theme.font.mono,
  fontSize: "0.9em",
  background: theme.colors.element.background,
  margin: 0,
  padding: "4px 5px",
  borderRadius: 5,
});

export const contentWidth = createVar();
export const listGap = createVar();
export const mainPagePadding = createVar();

export const main = style({
  width: contentWidth,
  margin: "auto",
  display: "flex",
  // The children are in reverse order to make the glass effect of Presentation work when hovering over an article
  flexDirection: "column-reverse",
  gap: listGap,
  vars: {
    [contentWidth]: "1028px",
    [listGap]: "20px",
    [mainPagePadding]: "40px",
  },
});
