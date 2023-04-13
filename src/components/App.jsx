import React from "react";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";
 import { useMediaQuery } from "react-responsive"

const App = () => {

	const isDesktop = useMediaQuery({
		query: "(min-width: 1001px)",
	})

  	const isMobile = useMediaQuery({
    	query: "(max-width: 1000px)",
  	})

	return (
		<>
			{isDesktop && <DesktopLayout/>}
			{isMobile && <MobileLayout />}
    	</>
	);
};

export default App;
