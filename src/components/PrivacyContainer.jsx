import React from "react";
import Box from "@mui/material/Box";
import darkTheme from "../utils/appTheme";
import PrivacyContent from "./PrivacyContent";
import { useMediaQuery } from "react-responsive"
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";




const PrivacyContainer = () => {

    const isDesktop = useMediaQuery({
		query: "(min-width: 1001px)",
	})

    const isMobile = useMediaQuery({
    	query: "(max-width: 1000px)",
  	})

    return(
        <>
            <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    {isDesktop && <>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box sx={{ width: "44%", height: "100vh", marginLeft: "28%" , marginRight:"28%",  marginTop:"6rem", marginBottom:"6rem", flexGrow:1}} >
                                <PrivacyContent/>
                            </Box>
                        </Box>
                    </>}
			        {isMobile && <>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box sx={{ width: "80%", height: "100vh", marginLeft: "10%" , marginRight:"10%",  marginTop:"6rem", marginBottom:"6rem", flexGrow:1}} >
                                <PrivacyContent/>
                            </Box>
                        </Box>
                    </>}
            </ThemeProvider>
        </>
    )
}

export default PrivacyContainer