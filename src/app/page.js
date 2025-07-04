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
  metadata, 
  jsonLd 
} from "@/app/SEO";

// Metadata pour le référencement
metadata

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