import { createTheme } from "@mui/material/styles"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
    },
    typography: {
    "fontFamily": `"Helvetica Neue", "Roboto", "sans-serif"`
  }
  },
})

export default darkTheme