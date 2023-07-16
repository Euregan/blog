import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { contentWidth, listGap } from "./App.css";
import { theme } from "./theme.css";

const articleBase = style({
  textDecoration: "none",
  transition: theme.transition,
  position: "relative",
});

const height = createVar();

export const articleIllustration = createVar();

const internalArticle = styleVariants({
  list: [
    articleBase,
    {
      overflow: "hidden",
      height,
      vars: {
        [height]: "100px",
      },
    },
  ],
  full: [
    articleBase,
    {
      height: "100vh",
    },
  ],
});

export const article = styleVariants({
  list: [
    internalArticle.list,
    {
      selectors: {
        [`&:has(~ .${internalArticle.full}), .${internalArticle.full} ~ &`]: {
          opacity: 0,
          vars: {
            [height]: calc.multiply(-1, listGap),
          },
        },
      },
    },
  ],
  full: [internalArticle.full],
});

export const title = style({
  color: "white",
  fontSize: 24,
  padding: "0 40px",
});

export const link = style([
  title,
  {
    padding: 0,
    lineHeight: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height,
    textDecoration: "none",
    transition: theme.transition,
    transformOrigin: "left",
    selectors: {
      [`.${article.full} &`]: {
        opacity: 0,
        height: calc.multiply(
          contentWidth,
          // This is the ratio of the article images
          9 / 16
        ),
      },
    },
  },
]);

export const linkText = style({
  width: "33%",
  height: "100%",
  padding: `0 35px`,
  display: "flex",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.13)",
  backdropFilter: "blur(3px)",
});

export const illustration = style({
  transition: theme.transition,
  objectFit: "cover",
  width: "100%",
  borderRadius: theme.borderRadius,
  selectors: {
    [`.${article.list} &`]: {
      height,
    },
    [`.${article.full} &`]: {
      height: calc.multiply(
        contentWidth,
        // This is the ratio of the article images
        9 / 16
      ),
    },
  },
});

export const content = style({
  transition: theme.transition,
  padding: "0 40px",
  selectors: {
    [`.${article.list} &`]: {
      opacity: 0,
    },
    [`.${article.full} &`]: {
      opacity: 1,
    },
  },
});

export const backgroundIllustration = createVar();

export const background = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: backgroundIllustration,
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: -1,
  filter: "brightness(0.5) blur(4px) contrast(0.8)",
  // We slightly scale the background to prevent dark borders around the background
  transform: "scale(1.1)",
  opacity: 0,
  transition: theme.transition,
  selectors: {
    [`.${article.list}:hover + &, .${article.full} + &`]: {
      opacity: 1,
    },
  },
});
