import React, { FC } from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

interface SEOProps {
    title: string;
    description: string;
}

const SEO: FC<SEOProps> = ({ title, description }) => {
    const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image,
        url: siteUrl,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="title" content={seo.title} />
            <meta name="url" content={seo.url} />
        </>
    );
}

export default SEO;