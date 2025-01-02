import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://salemfoods.com'
  const defaultDescription =
    'Premium Egyptian fruits and agricultural products for global markets'
  const defaultImage = `${siteUrl}/og-image.jpg`

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{`${title} | Salem Foods`}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={url || siteUrl} />
    </Helmet>
  )
}

export default SEO
