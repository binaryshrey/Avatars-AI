import React from "react";
import HeaderMob from "./mobile/HeaderMob";
import Container from "@mui/material/Container";
import FooterMobile from "./mobile/FooterMobile";


const MobileLayout = () => {
	return (
		<>
			<Container maxWidth="xl">
				<HeaderMob />
				<FooterMobile/>
			</Container>
		</>
	);
};

export default MobileLayout;