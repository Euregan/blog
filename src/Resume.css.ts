import { createVar, style } from "@vanilla-extract/css";
import { contentWidth } from "./App.css";

const accent = createVar();

export const resume = style({
  display: "grid",
  gridTemplateColumns: "18.7em auto",
  gap: "1em",

  width: contentWidth,
  margin: "auto",

  "@media": {
    print: {
      fontSize: "16px",
      gridTemplateColumns: "13em auto",
      height: "100vh",
      color: "black",
    },
  },
  vars: {
    [accent]: "#6ea4db",
  },
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  padding: "1em",
  gap: "1em",
  background: "#18181b",
  "@media": {
    print: {
      borderRight: `2px solid ${accent}`,
    },
  },
});

export const name = style({
  lineHeight: 1.2,
  display: "none",
  "@media": {
    print: {
      display: "block",
    },
  },
});

export const namePart = style({ display: "inline-block", lineHeight: 1 });

export const portrait = style({
  objectFit: "contain",
  borderRadius: "1em",
});

export const miscellaneous = style({
  padding: 0,
  margin: 0,
});

export const contact = style({
  padding: 0,
  margin: 0,
});

export const details = style({
  listStyle: "none",
});

export const content = style({
  // We use this to align the content and the name in the left panel
  padding: "1em 1em 1em 0",
});

export const experiences = style({
  padding: 0,
  margin: 0,

  display: "flex",
  flexDirection: "column",
  gap: "1em",
});

export const company = style({
  listStyle: "none",
});

const titleBase = style({
  display: "flex",
  gap: "1em",
  alignItems: "baseline",
  "@media": {
    print: { gap: "0.5em" },
  },
});

export const companyTitle = style([titleBase]);

export const dates = style({
  color: "#7b7b81",
  fontWeight: 400,
  textTransform: "capitalize",
  printColorAdjust: "exact",
  "@media": {
    print: {
      color: "#3a3a3e",
      fontSize: "0.8em",
    },
  },
});

export const jobs = style({
  padding: 0,
  margin: 0,

  display: "flex",
  flexDirection: "column",
  gap: "0.5em",
});

export const job = style({
  listStyle: "none",
});

export const jobTitle = style([titleBase, { lineHeight: 1.5 }]);

export const jobDescription = style({
  color: "#97979d",
  printColorAdjust: "exact",
  "@media": {
    print: {
      color: "#3a3a3e",
    },
  },
});

export const technologies = style({
  color: "#97979d",
  fontWeight: 400,
  printColorAdjust: "exact",
  "@media": {
    print: {
      color: "#3a3a3e",
    },
  },
  selectors: {
    ":not(h4) > &:before": {
      content: "Technologies: ",
    },
  },
});
