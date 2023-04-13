import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "@mui/material/Container";

const Desktoplayout = () => {
	return (
		<>
			<Container maxWidth="xl">
				<Header />
				<Footer/>
			</Container>
		</>
	);
};

export default Desktoplayout;
