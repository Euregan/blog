import { style } from "@vanilla-extract/css";
import { mainPagePadding } from "../../App.css";
import { theme } from "../../theme.css";

export const code = style({
  fontSize: "1rem",
  fontFamily: theme.font.mono,
  padding: mainPagePadding,
  background: theme.colors.element.background,
  borderRadius: theme.borderRadius,
});

const subtle = style({ color: "#636f88" });
const primary = style({ color: "#81A1C1" });
const secondary = style({ color: "#A3BE8C" });
const tertiary = style({ color: "#B48EAD" });
const quaternary = style({ color: "#88C0D0" });
const quenarary = style({ color: "#EBCB8B" });

export const bold = style({ fontWeight: "bold" });

export const italic = style({ fontStyle: "italic" });

export const comment = style([subtle]);
export const prolog = style([subtle]);
export const doctype = style([subtle]);
export const cdata = style([subtle]);

export const punctuation = style([primary]);

export const property = style([primary]);
export const tag = style([primary]);
export const constant = style([primary]);
export const symbol = style([primary]);
export const deleted = style([primary]);

export const number = style([tertiary]);

export const boolean = style([primary]);

export const selector = style([secondary]);
export const attrName = style([secondary]);
export const str = style([secondary]);
export const char = style([secondary]);
export const builtin = style([secondary]);
export const inserted = style([secondary]);

export const operator = style([primary]);
export const entity = style([primary, { cursor: "help" }]);
export const url = style([primary]);
export const cssString = style([primary]);
export const styleString = style([primary]);
export const variable = style([primary]);

export const atrule = style([quaternary]);
export const attrValue = style([quaternary]);
export const fn = style([quaternary]);
export const className = style([quaternary]);

export const keyword = style([primary]);

export const regex = style([quenarary]);
export const important = style([quenarary, bold]);
