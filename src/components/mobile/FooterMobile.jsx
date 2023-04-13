import React from "react";
import db from "../../data/db.json";
import { Icon } from "@mui/material";


const FooterMobile = () => {
    const downloadIcon = (
		<Icon sx={{ width: "100%", height: "100%", marginTop: "8x" }}>
			<img alt="play_store" src="play_store_mobile.svg" height={32} width={24}/>
		</Icon>
	);
	return (
		<>
			<div style={{ marginTop: "8rem", textAlign: "center", marginBottom: "2rem" }}>
				<a href={db.privacy} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5", marginRight: "0.8rem"}}>
          			Privacy
        		</a>
				<a href={db.terms} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5",marginLeft: "0.8rem", marginRight: "0.8rem" }}>
          			Terms
        		</a>
				<a href={db.contact} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5" ,marginLeft: "0.8rem" }}>
          			Contact
        		</a>
			</div>
		</>
	);
};

export default FooterMobile;
