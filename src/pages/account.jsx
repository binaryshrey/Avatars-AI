import * as React from "react"
import darkTheme from "../utils/appTheme";
import { SeoConfig } from "../components/seo"
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import AccountDeletionRedirect from "../components/AccountDeletionRedirect"

export default function AccountDeletion() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AccountDeletionRedirect/>
    </ThemeProvider>
  
  )
}

export const Head = () => (
  <SeoConfig />
)