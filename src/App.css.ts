import {
  createVar,
  fontFace,
  globalStyle,
  style,
  styleVariants,
} from "@vanilla-extract/css";

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

export const background = createVar();

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

const pageBase = style({
  "::after": {
    content: " ",
    background,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    zIndex: -1,
    width: "100%",
    height: "100%",
    filter: "brightness(0.5) blur(4px) contrast(0.8)",
    transition: "all 0.5s",
    // We slightly scale the background to prevent dark borders around the background
    transform: "scale(1.1)",
  },
});

export const page = styleVariants({
  default: [
    pageBase,
    {
      "::after": {
        opacity: 0,
      },
    },
  ],
  withBackground: [
    pageBase,
    {
      "::after": {
        opacity: 1,
      },
    },
  ],
});
