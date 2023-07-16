import { style } from "@vanilla-extract/css";
import * as articleStyles from "./Article.css";
import { theme } from "./theme.css";

export const presentation = style({
  margin: "20px 0",
  fontSize: 18,
  transition: theme.transition,
  padding: 40,
  borderRadius: theme.borderRadius,
  border: "1px solid transparent",
  // It is important to update this height to exactly match
  // the actual content height
  height: 157,
  boxSizing: "border-box",
  selectors: {
    [`.${articleStyles.article.list}:hover ~ &`]: {
      background: "rgba(255, 255, 255, 0.1)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(10px)",
      borderColor: "rgba(255, 255, 255, 0.1)",
    },
    [`.${articleStyles.article.full} ~ &`]: {
      opacity: 0,
      height: 0,
      margin: 0,
      padding: "0 40px",
    },
  },
});

export const content = style({ margin: 0 });
