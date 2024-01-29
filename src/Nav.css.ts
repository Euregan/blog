import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const nav = style({
  padding: 20,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  "@media": {
    print: {
      display: "none",
    },
  },
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
    [`${link}:hover &, &:hover`]: {
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

export const internals = style([baseCategory, { gap: "1em" }]);

export const externals = style([baseCategory, { justifyContent: "flex-end" }]);

export const languageSwitcher = style({
  all: "unset",
  display: "flex",
  gap: "0.35em",
  // Hack to keep the languages aligned with the icons
  paddingTop: "1.3ex",
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
