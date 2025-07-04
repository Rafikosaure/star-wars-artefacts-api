import config from "@/config";

// Metadata pour le référencement
export const metadata = {
    title: 'Star Wars Artefacts API',
    description: 'Une API REST pour explorer des artefacts rares issus de l’univers de Star Wars.',
    openGraph: {
        title: 'Star Wars Artefacts API',
        description: 'Explorez des artefacts issus du Canon, des Légendes ou de l’imaginaire autour de Star Wars.',
        url: config.baseUrl,
        siteName: 'Star Wars Artefacts API',
        images: [
        {
            url: `${config.baseUrl}/images/documentation/banner.jpg`,
            width: 1200,
            height: 630,
            alt: 'API artefacts Star Wars',
        },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Star Wars Artefacts API',
        description: 'Une API REST dédiée aux artefacts de l’univers Star Wars.',
        images: [`${config.baseUrl}/images/documentation/banner.jpg`],
    },
};


// JSON-LD pour le référencement
export const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebAPI",
    "name": "Star Wars Artefacts API",
    "description": "Une API REST pour explorer des artefacts rares issus de l’univers de Star Wars.",
    "url": config.baseUrl,
    "provider": {
        "@type": "Person",
        "name": "Rafik Ben Sadi"
    }
};