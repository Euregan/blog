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
  selectors: {
    [`.${articleStyles.article.list}:hover ~ &`]: {
      background: "rgba(255, 255, 255, 0.2)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      // backdropFilter: "blur(10px)",
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
  },
});

export const title = style({ margin: 0 });

export const content = style({ margin: 0 });
