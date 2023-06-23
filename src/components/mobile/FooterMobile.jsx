import React from "react";
import { Link } from "gatsby";
import db from "../../data/db.json";


const FooterMobile = () => {
	return (
		<>
			<div style={{ marginTop: "14rem", textAlign: "center", marginBottom: "4rem" }}>
				<Link to="/privacy" target="_blank" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5", marginRight: "0.4rem"}}>
          			Privacy
        		</Link>
				<Link to="/terms" target="_blank" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5",marginLeft: "0.4rem", marginRight: "0.4rem" }}>
          			Terms
        		</Link>
				<a href={db.contact} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#ffffff", opacity: "0.5" ,marginLeft: "0.4rem" }}>
          			Contact
        		</a>
			</div>
		</>
	);
};

export default FooterMobile;
