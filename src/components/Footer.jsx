import React from "react";
import { Link } from "gatsby";
import db from "../data/db.json";


const Footer = () => {
	return (
		<>
			<div style={{ marginTop: "14rem", textAlign: "center", marginBottom: "4rem" }}>
				<Link to="/privacy" target="_blank" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5", marginRight: "2rem"}}>
          			Privacy
        		</Link>
				<Link to="/terms" target="_blank" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5", marginRight: "2rem", marginLeft: "2rem"}}>
          			Terms
        		</Link>
				<a href={db.twitter} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5", marginRight: "2rem", marginLeft: "2rem" }}>
          			Twitter
        		</a>
				<a href={db.contact} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5",  marginLeft: "2rem" }}>
          			Contact
        		</a>
			</div>
		</>
	);
};

export default Footer;
