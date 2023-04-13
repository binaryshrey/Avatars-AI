import React from "react";
import db from "../../data/db.json";
import Box from "@mui/material/Box";
import { Icon } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

 
const HeaderMob = () => {
	const downloadIcon = (
		<Icon sx={{ width: "100%", height: "100%", marginTop: "8x" }}>
			<img alt="play_store" src="play_store_mobile.svg" height={32} width={24}/>
		</Icon>
	);


	return (
		<>
			<Box sx={{ textAlign: "center" }}>
				<Box sx={{  height: "60vh" }}>
					<img alt="header" src="mobile_header.svg" height="100%"  />
				</Box>
				<Typography variant="h4" component="div" sx={{ flexGrow: 1, marginTop: "4rem", fontWeight: "500",
					
					backgroundSize:'500% auto',
					}} >
						{db.appName}
				</Typography>
				<Typography variant="body2" component="div" sx={{ flexGrow: 1, opacity: "0.5", fontSize:"12px" }} >
					{db.description}
				</Typography>

				<a href={db.appLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#000000"}}>
          			<Button sx={{ textTransform: "none", fontFamily: `"Helvetica Neue", "Roboto", "sans-serif"`, marginTop: "6rem", background: "#FFFFFF",
						":hover": { bgcolor: "#FFFFFF", color: "#000000",boxShadow: "rgba(255, 255, 255, 0.21) 0px 0.755195px 3.77597px -0.75px, rgba(255, 255, 255, 0.204) 0px 1.93034px 9.65168px -1.5px, rgba(255, 255, 255, 0.192) 0px 3.86188px 19.3094px -2.25px, rgba(255, 255, 255, 0.173) 0px 7.32867px 36.6434px -3px, rgba(255, 255, 255, 0.13) 0px 14.554px 72.77px -3.75px, rgba(255, 255, 255, 0.024) 0px 32px 160px -4.5px, rgba(255, 255, 255, 0.16) 0px 16px 180px 0px"},
						borderRadius: "24px", paddingRight: "24px", paddingLeft: "32px", boxShadow: "rgba(255, 255, 255, 0.21) 0px 0.755195px 3.77597px -0.75px, rgba(255, 255, 255, 0.204) 0px 1.93034px 9.65168px -1.5px, rgba(255, 255, 255, 0.192) 0px 3.86188px 19.3094px -2.25px, rgba(255, 255, 255, 0.173) 0px 7.32867px 36.6434px -3px, rgba(255, 255, 255, 0.13) 0px 14.554px 72.77px -3.75px, rgba(255, 255, 255, 0.024) 0px 32px 160px -4.5px, rgba(255, 255, 255, 0.16) 0px 16px 180px 0px",}}
						variant="contained" startIcon={downloadIcon}>
							Download Now
					</Button>
        		</a>
			</Box>
		</>
	);
};

export default HeaderMob;
