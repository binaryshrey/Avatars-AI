import * as React from "react";
import { SeoConfig } from "../components/Seo";
import PrivacyContainer from "../components/PrivacyContainer";

export default function Privacy() {
	return <PrivacyContainer />;
}

export const Head = () => <SeoConfig />;
