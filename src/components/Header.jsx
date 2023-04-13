import React from "react";
import "../styles/global.css"
import db from "../data/db.json";
import Box from "@mui/material/Box";
import { Icon } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
 

const Header = () => {
	const downloadIcon = (
		<Icon sx={{ width: "100%", height: "100%", marginTop: "8x" }}>
			<img alt="play_store" src="play_store.svg" height={40} width={24}/>
		</Icon>
	);


	return ( 
		<>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Box sx={{ width: "50vw", height: "80vh", marginLeft: "6rem" }} >
					
					<Typography variant="h2" component="div" sx={{ flexGrow: 1, marginTop: "12rem", fontWeight: "500" ,
						TextFillColor: "transparent",
						backgroundSize:'500% auto', 
		
				}} >
						{db.appName}
					</Typography>
					<Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginTop: "1rem", opacity: "0.5" }} >
						{db.description}
					</Typography>
					<a href={db.appLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#000000"}}>
          				<Button sx={{ textTransform: "none", fontFamily: `"Helvetica Neue", "Roboto", "sans-serif"`, marginTop: "18rem", background: "#FFFFFF",
							":hover": { bgcolor: "#FFFFFF", color: "#000000",boxShadow:"rgba(255, 255, 255, 0.008) 0px 0.711888px 3.55944px 0px, rgba(255, 255, 255, 0.02) 0px 1.93769px 9.68843px 0px, rgba(255,255, 255, 0.043) 0px 4.25286px 21.2643px 0px, rgba(255, 255, 255,0.094) 0px 9.43828px 47.1914px 0px, rgba(255, 255, 255, 0.24) 0px 24px 120px 0px, rgba(255, 255, 255, 0.24) 0px 24px 400px 0px;"},
							borderRadius: "24px", paddingRight: "24px", paddingLeft: "32px", boxShadow: "rgba(255, 255, 255, 0.21) 0px 0.755195px 3.77597px -0.75px, rgba(255, 255, 255, 0.204) 0px 1.93034px 9.65168px -1.5px, rgba(255, 255, 255, 0.192) 0px 3.86188px 19.3094px -2.25px, rgba(255, 255, 255, 0.173) 0px 7.32867px 36.6434px -3px, rgba(255, 255, 255, 0.13) 0px 14.554px 72.77px -3.75px, rgba(255, 255, 255, 0.024) 0px 32px 160px -4.5px, rgba(255, 255, 255, 0.16) 0px 16px 180px 0px",}}
							variant="contained" startIcon={downloadIcon}>
								Download Now
						</Button>
        			</a>
				</Box>
				<Box sx={{ width: "300px", height: "640px", marginRight: "6rem", display: "flex", justifyContent: "flex-end",marginTop: "5rem" }}>
					<img alt="play_store" src="header.svg" height="100%"  />
				</Box>
			</Box>
		</>
	);
};

export default Header;
