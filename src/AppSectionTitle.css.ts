import { style } from "@vanilla-extract/css";
import * as articleStyles from "./Article.css";
import { theme } from "./theme.css";

export const posts = style({
  padding: "0 40px",
  // It is important to update this height to exactly match
  // the actual content height
  height: 40,
  selectors: {
    [`.${articleStyles.article.full} ~ &`]: {
      overflow: "hidden",
      transition: theme.transition,
      opacity: 0,
      height: 0,
    },
  },
});
