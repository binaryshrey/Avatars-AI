import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PHBanner from "./PHBanner";

const Desktoplayout = () => {
	return (
		<>
			<div>
				<PHBanner/>
				<Header />
				<Footer/>
			</div>
		</>
	);
};

export default Desktoplayout;
