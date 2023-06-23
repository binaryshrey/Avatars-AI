import React from "react";
import HeaderMob from "./mobile/HeaderMob";
import FooterMobile from "./mobile/FooterMobile";
import PHBannerMobile from "./mobile/PHBannerMobile";



const MobileLayout = () => {
	return (
		<>
			<div>
				<PHBannerMobile/>
				<HeaderMob />
				<FooterMobile/>
			</div>
		</>
	);
};

export default MobileLayout;