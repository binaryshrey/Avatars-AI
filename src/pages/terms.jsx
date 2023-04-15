import * as React from "react"
import { SeoConfig } from "../components/seo"
import TermsContainer from "../components/TermsContainer"

export default function Terms() {
  return <TermsContainer/>
}

export const Head = () => (
  <SeoConfig />
)