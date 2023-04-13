import React from "react";
import App from "./App";
import darkTheme from "../utils/appTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

const Container = () => {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</>
	);
};

export default Container;
