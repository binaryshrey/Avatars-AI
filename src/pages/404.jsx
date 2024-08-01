import React from "react";
import { SeoConfig } from "../components/Seo";

const NotFound = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<div>404</div>
		</div>
	);
};

export default NotFound;

export const Head = () => <SeoConfig title="404" />;
