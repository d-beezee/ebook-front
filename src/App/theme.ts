import { DEFAULT_THEME } from "@zendeskgarden/react-theming";

const theme: typeof DEFAULT_THEME = {
  ...DEFAULT_THEME,
  colors: {
    ...DEFAULT_THEME.colors,
    base: "dark",
    background: "#1C1C1E",
    foreground: "#bcd6f1",
    primaryHue: "lemon",
    dangerHue: "red",
    warningHue: "yellow",
    successHue: "green",
    neutralHue: "grey",
    chromeHue: "mint",
  },
  palette: {
    ...DEFAULT_THEME.palette,
    black: "#1C1C1E",
    white: "#fff",
  },
};
theme.components = {
  ...DEFAULT_THEME.components,
  "chrome.body": {
    backgroundColor: theme.colors.background,
  },
};
export default theme;
