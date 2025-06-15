// src/components/SEO.js

import Head from 'next/head';

export default function SEO() {
  const title = 'Star Wars Artefacts API';
  const description = 'Une API REST pour explorer des artefacts rares issus de l’univers de Star Wars.';
  const url = 'https://star-wars-artefacts-api.vercel.app/';
  const image = 'https://star-wars-artefacts-api.vercel.app/images/documentation/seo_banner.jpg';
  const siteName = 'Star Wars Artefacts API';
  const locale = 'fr_FR';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebAPI",
    "name": title,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Person",
      "name": "Rafik Ben Sadi"
    }
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
