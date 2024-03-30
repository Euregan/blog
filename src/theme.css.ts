import { createTheme, createVar, fontFace } from "@vanilla-extract/css";

export const gap = createVar();

const fira = fontFace([
  {
    src: `url(/FiraSans-Thin.ttf)`,
    fontWeight: 100,
  },
  {
    src: `url(/FiraSans-ThinItalic.ttf)`,
    fontWeight: 100,
    fontStyle: "italic",
  },
  {
    src: `url(/FiraSans-ExtraLight.ttf)`,
    fontWeight: 200,
  },
  {
    src: `url(/FiraSans-ExtraLightItalic.ttf)`,
    fontWeight: 200,
    fontStyle: "italic",
  },
  {
    src: `url(/FiraSans-Light.ttf)`,
    fontWeight: 300,
  },
  {
    src: `url(/FiraSans-LightItalic.ttf)`,
    fontWeight: 300,
    fontStyle: "italic",
  },
  {
    src: `url(/FiraSans-Regular.ttf)`,
    fontWeight: 400,
  },
  {
    src: `url(/FiraSans-RegularItalic.ttf)`,
    fontWeight: 400,
    fontStyle: "italic",
  },
  {
    src: `url(/FiraSans-Medium.ttf)`,
    fontWeight: 500,
  },
  {
    src: `url(/FiraSans-MediumItalic.ttf)`,
    fontWeight: 500,
    fontStyle: "italic",
  },
  {
    src: `url(/FiraSans-SemiBold.ttf)`,
    fontWeight: 600,
  },
  {
    src: `url(/FiraSans-SemiBoldItalic.ttf)`,
    fontWeight: 600,
    fontStyle: "italic",
  },
  {
    src: `url(/FiraSans-Bold.ttf)`,
    fontWeight: 700,
  },
  {
    src: `url(/FiraSans-BoldItalic.ttf)`,
    fontWeight: 700,
    fontStyle: "italic",
  },
  {
    src: `url(/FiraSans-ExtraBold.ttf)`,
    fontWeight: 800,
  },
  {
    src: `url(/FiraSans-ExtraBoldItalic.ttf)`,
    fontWeight: 800,
    fontStyle: "italic",
  },
  {
    src: `url(/FiraSans-Black.ttf)`,
    fontWeight: 900,
  },
  {
    src: `url(/FiraSans-BlackItalic.ttf)`,
    fontWeight: 900,
    fontStyle: "italic",
  },
]);

const commit = fontFace([
  {
    src: `url(/CommitMono-400-Italic.otf)`,
    fontWeight: 400,
    fontStyle: "italic",
  },
  {
    src: `url(/CommitMono-400-Regular.otf)`,
    fontWeight: 400,
  },
  {
    src: `url(/CommitMono-700-Italic.otf)`,
    fontWeight: 700,
    fontStyle: "italic",
  },
  {
    src: `url(/CommitMono-700-Regular.otf)`,
    fontWeight: 700,
  },
]);

export const [themeClass, theme] = createTheme({
  font: {
    special: fira,
    mono: commit,
  },
  colors: {
    accent: "#5E81AC",
    element: {
      background: "#111111",
    },
  },
  transition: "all 0.5s ease, color 0.2s ease",
  borderRadius: "10px",
});
