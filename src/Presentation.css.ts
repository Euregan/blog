import { style } from "@vanilla-extract/css";
import * as articleStyles from "./Article.css";
import * as boxStyle from "./ui/Box.css";
import { theme } from "./theme.css";
import { mainPagePadding } from "./App.css";

export const presentation = style([
  boxStyle.box,
  {
    margin: "20px 0",
    fontSize: 18,
    transition: theme.transition,
    padding: mainPagePadding,
    borderRadius: theme.borderRadius,
    border: "1px solid transparent",
    // It is important to update this height to exactly match
    // the actual content height, so the animation works properly
    height: 157,
    boxSizing: "border-box",
    selectors: {
      [`.${articleStyles.article.full} ~ &`]: {
        opacity: 0,
        height: 0,
        margin: 0,
        padding: `0 ${mainPagePadding}`,
      },
    },
  },
]);

export const title = style({ fontFamily: theme.font.special });

export const content = style({ margin: 0 });
