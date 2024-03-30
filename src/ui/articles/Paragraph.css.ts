import { style } from "@vanilla-extract/css";
import { mainPagePadding } from "../../App.css";
import * as twoColumnsStyle from "../TwoColumns.css";

export const paragraph = style({
  fontSize: 18,
  padding: `0 ${mainPagePadding}`,
  selectors: {
    [`${twoColumnsStyle.columns} &`]: {
      padding: 0,
    },
  },
});
