import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const nav = style({
  padding: 20,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
});

export const link = style({
  color: "white",
  textDecoration: "none",
  position: "relative",
});

const offset = createVar();

export const linkContent = style({
  lineHeight: 1,
  vars: { [offset]: "-4px" },
  borderBottom: "2px solid transparent",
  selectors: {
    [`${link}:hover &`]: {
      marginTop: offset,
      paddingBottom: calc.multiply(offset, -1),
      borderBottom: "2px solid white",
    },
  },
  transition: "all 0.2s cubic-bezier(.17,.84,.44,1)",
});

const baseCategory = style({
  all: "unset",
  listStyle: "none",
  display: "flex",
  gap: 10,
});

export const internals = style([baseCategory, {}]);

export const externals = style([baseCategory, { justifyContent: "flex-end" }]);
