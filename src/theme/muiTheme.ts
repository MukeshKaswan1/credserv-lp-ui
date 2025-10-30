import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0ea5e9", // var(--brand-500)
      light: "#7dd3fc",
      dark: "#0369a1",
      contrastText: "#ffffff",
    },
    secondary: { main: "#f59e0b" }, // var(--accent)
    success: { main: "#22c55e" },
    warning: { main: "#facc15" },
    error: { main: "#ef4444" },
    background: {
      default: "#f9fafb",
      paper: "#ffffff",
    },
    text: { primary: "#111827" },
    divider: "#e5e7eb",
  },
});

export default muiTheme;