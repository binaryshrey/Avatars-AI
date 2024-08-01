import * as React from "react";
import { SeoConfig } from "../components/Seo";
import Container from "../components/Container";

export default function Home() {
	return <Container />;
}

export const Head = () => <SeoConfig />;
