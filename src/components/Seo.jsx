import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SeoConfig = ({ title, description }) => {
  const { title: defaultTitle, description: defaultDescription, twitterUsername, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image,
    siteUrl,
    twitterUsername,

  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="notesbay twitter" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta httpEquiv="Cache-control" content="public"/>
     </>
  )
}