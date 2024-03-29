import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const nav = style({
  padding: 20,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  "@media": {
    print: {
      display: "none",
    },
  },
});

export const link = style({
  color: "white",
  textDecoration: "none",
});

const gap = createVar();
const offset = createVar();
const borderThickness = createVar();

export const linkContent = style({
  lineHeight: 1,
  vars: { [gap]: "4px", [offset]: "0px", [borderThickness]: "2px" },
  borderBottom: `${borderThickness} solid transparent`,
  paddingBottom: gap,
  selectors: {
    [`${link}:hover &, &:hover`]: {
      transform: `translateY(${calc.add(
        calc.subtract(calc.multiply(gap, -1), borderThickness),
        offset
      )})`,
      borderBottom: `${borderThickness} solid white`,
    },
  },
  transition: "all 0.2s cubic-bezier(.17,.84,.44,1)",
});

export const icon = style([
  linkContent,
  {
    vars: { [offset]: "7px" },
    fontSize: "1.5rem",
    transform: `translateY(${offset})`,
  },
]);

const baseCategory = style({
  all: "unset",
  listStyle: "none",
  display: "flex",
  gap: 10,
  alignItems: "baseline",
});

export const internals = style([baseCategory, { gap: "1em" }]);

export const externals = style([baseCategory, {}]);

export const languageSwitcher = style({
  all: "unset",
  display: "flex",
  alignItems: "baseline",
  gap: "0.35em",
});

export const languageButton = style([
  linkContent,
  {
    cursor: "pointer",
    selectors: {
      ["&:has(input:checked)"]: {
        fontStyle: "italic",
        fontWeight: 500,
        cursor: "default",
        marginTop: 0,
        paddingBottom: 0,
        borderBottom: "none",
      },
    },
  },
]);

export const languageRadio = style({ display: "none" });
