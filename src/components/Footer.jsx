import React from "react";
import db from "../data/db.json";


const Footer = () => {
	return (
		<>
			<div style={{ marginTop: "12rem", textAlign: "center", marginBottom: "2rem" }}>
				<a href={db.privacy} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5", marginRight: "2rem"}}>
          			Privacy
        		</a>
				<a href={db.terms} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5", marginRight: "2rem", marginLeft: "2rem"}}>
          			Terms
        		</a>
				<a href={db.contact} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5", marginLeft: "2rem" }}>
          			Contact
        		</a>
			</div>
		</>
	);
};

export default Footer;
