// src/app/page.js
import config from "@/config";
import styles from "./styles/page.module.scss";
import "./styles/stars-rain-animation.scss";
import Image from 'next/image';
import cloneOld from '../../public/images/documentation/clone_old.webp';
import deathStar from '../../public/images/documentation/death_star.webp';
import destroyer from '../../public/images/documentation/destroyer.webp';
import CodeBlockWrapper from "./components/CodeBlockWrapper";
import Starfield from "./components/Starfield";
import Footer from "./components/Footer";
import Contributor from "./components/Contributor";
import ApiRoutesInfo from './components/ApiRoutesInfo';
import { 
  apiPresentation, 
  contributorPresentation01, 
  contributorPresentation02, 
  originApiImages, 
  JSONResponse, 
  JSONObjectExample
} from "@/data/homePageData";
import { 
  // metadata, 
  jsonLd 
} from "@/app/SEO";

// Metadata pour le référencement
const metadata = {
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

// Page de documentation de l'API
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.page}>
        <Starfield />
        <main className={styles.main}>
          <div className={styles.contentcontainer}>
            <h1 className={styles.heading}>
              Star Wars Artefacts API – Documentation
            </h1>

            <p className={styles.paragraph}>
              {apiPresentation}
            </p>

            <h2 className={styles.subheading}>
              <Image src={cloneOld} alt="Casque de soldat clone" width={32} height={32} style={{ verticalAlign: 'middle' }} /> Base URL
            </h2>
            <p className={styles.quote}><code className={styles.code}>{config.baseUrl}/api/products</code></p>
            
            <ApiRoutesInfo />

            <h2 className={styles.subheading}><Image src={deathStar} alt="Etoile de la mort" width={32} height={32} style={{ verticalAlign: 'middle' }} /> Exemple de réponse</h2>
              {/* <CodeBlock code={JSONResponse} /> */}
              <CodeBlockWrapper code={JSONResponse} />
            <h2 className={styles.subheading}><Image src={destroyer} alt="Vaisseau destroyer impérial" width={32} height={32} style={{ verticalAlign: 'middle' }} /> Format des données JSON</h2>
              {/* <CodeBlock code={JSONObjectExample} /> */}
              <CodeBlockWrapper code={JSONObjectExample} />
            <Contributor
              presentation01={contributorPresentation01}
              presentation02={contributorPresentation02}
              imageInfo={originApiImages}
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}