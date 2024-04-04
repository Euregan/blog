import { style } from "@vanilla-extract/css";
import { mainPagePadding } from "../../App.css";
import * as twoColumnsStyle from "../TwoColumns.css";
import { theme } from "../../theme.css";
// import { calc } from "@vanilla-extract/css-utils";

export const note = style({
  fontSize: 18,
  padding: mainPagePadding,
  background: theme.colors.element.background,
  borderRadius: theme.borderRadius,
  selectors: {
    [`${twoColumnsStyle.columns} &`]: {
      padding: 0,
    },
  },
  // paddingLeft: calc.subtract(mainPagePadding, "4px"),
  // paddingTop: calc.subtract(mainPagePadding, "4px"),
  // borderLeft: "solid 4px #2870BD",
  // borderTop: "solid 4px #2870BD",

  // position: "relative",
  // "::before": {
  //   content: "Side note",
  //   position: "absolute",
  //   top: 0,
  //   fontWeight: 500,
  //   left: mainPagePadding,
  // },

  position: "relative",
  overflow: "hidden",
  "::before": {
    content: " ",
    position: "absolute",
    top: 0,
    left: 0,
    background: "#2870BD",
    width: theme.borderRadius,
    height: "100%",
  },
});
