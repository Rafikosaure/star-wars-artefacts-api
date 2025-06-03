// src/app/page.js
import styles from "./page.module.css";
import "./stars-rain-animation.scss";
import Image from 'next/image';
import cloneOld from '../../public/images/documentation/clone_old.webp';
import deathStar from '../../public/images/documentation/death_star.webp';
import destroyer from '../../public/images/documentation/destroyer.webp';
import milleniumFalcon from '../../public/images/documentation/millenium_falcon.webp';
import r2d2 from '../../public/images/documentation/r2d2.webp';
import logoRebellion from '../../public/images/documentation/logo_rebellion.webp'
import CodeBlock from "./components/CodeBlock";



export default function Home() {

  const apiPresentation = "Cette API présente des artefacts divers liés à Star Wars, l'univers de fiction imaginé par Georges Lucas. Elle a été conçue originellement par un développeur passionné de Star Wars dans le but de fournir à l'un de ses projets e-commerce des produits de vente liés à ce space-opéra iconique. C'est pour cette raison que les artefacts listés ont la structure de produits de vente, avec des clés de données spécifiques. Toutefois, d'autres usages que l'e-commerce sont possibles. L'API permet grâce à sa structure de lister, filtrer et organiser par pages ces artefacts."

  const contributorPresentation01 = "Je suis Rafik Ben Sadi, développeur fullstack et fan d'univers de fantasy. Cette API disponible à tous est à l'origine prévue pour l'un de mes projets personnels, un Wiki sur Star Wars intégrant une boutique en ligne où l'on peut faire ses emplettes avec... des artefacts issus de Star Wars !"

  const contributorPresentation02 = "Ces artefacts sont parfois imaginés ou inspirés de l'univers Canon, de Legends, ou bien sont totalement imaginés à partir du lore. On en trouve de tous les genres : les sabres laser blanc d'Ahsoka Tano, des ouvrages précieux tel le journal des Whills ou les livres sacrés des anciens Jedi... ou même un gigantesque fragment de l’Étoile de la Mort, pêché directement dans les profondeurs de Kef Bir !"

  const JSONResponse = 
  `{
    "data": [
      {
        "id": "67eebf...",
        "title": "L'holocron de Dark Nihilus",
        "description": "Artefact rare contenant...",
        "price": "250 000",
        ...
      }
    ],
    "pagination": {
      "total": 27,
      "page": 1,
      "pageSize": 6,
      "totalPages": 5
    }
  }`

  const JSONObjectExample = 
  `{
    "id": "67eebf...",
    "title": "L’holocron de Dark Nihilus",
    "description": "Artefact rare contenant la conscience fragmentée de Dark Nihilus, Seigneur Sith légendaire dont la faim dévorait la Force elle-même.",
    "price": "250 000",
    "currencyCode": "dataries",
    "maxQuantity": 1,
    "imageUrl": "/images/holocron_dark_nihilus.webp",
    "largeImageUrl": "/images/large/holocron_dark_nihilus_large.webp",
    "isActive": true,
    "tags": [
      "relique",
      "sith",
      "rare",
      "côté obscur de la force"
    ],
    "materials": [
      "cristal de mémoire kyber",
      "obsidienne"
    ]
  }`


  return (
    <div className={styles.page}>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
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
          <p className={styles.quote}><code className={styles.code}>https://star-wars-artefacts-api.vercel.app/api/products</code></p>

          <h2 className={styles.subheading}><Image src={r2d2} alt="Droid R2D2" width={32} height={32} style={{ verticalAlign: 'middle' }} /> Routes disponibles</h2>
          <h3 className={styles.firstroute}><Image src={logoRebellion} alt="Logo de l'alliance rebelle" width={24} height={24} style={{ verticalAlign: 'middle' }} /> GET <span className={styles.code}>/api/products</span></h3>
          <p className={styles.quote}>Renvoie une liste de produits avec pagination, tri, recherche et filtres.</p>
          <ul className={styles.unorderedlist}>
            <li className={styles.listitem}><code className={styles.code}>page</code> – numéro de page (par défaut : 1)</li>
            <li className={styles.listitem}><code className={styles.code}>limit</code> – nombre d’éléments par page ou &quot;all&quot;</li>
            <li className={styles.listitem}><code className={styles.code}>sort</code> – <code className={styles.code}>title_asc</code>, <code className={styles.code}>price_desc</code>, etc.</li>
            <li className={styles.listitem}><code className={styles.code}>limitRandom</code> – à utiliser avec <code className={styles.code}>sort=random</code></li>
            <li className={styles.listitem}><code className={styles.code}>tags</code>, <code className={styles.code}>excludeTags</code> – filtres par mots-clés</li>
            <li className={styles.listitem}><code className={styles.code}>q</code> – recherche texte</li>
          </ul>

          <h3 className={styles.route}><Image src={logoRebellion} alt="Logo de l'alliance rebelle" width={24} height={24} style={{ verticalAlign: 'middle' }} /> GET <span className={styles.code}>/api/products/[id]</span></h3>
          <p className={styles.quote}>Renvoie un produit par son <code>id</code> exact.</p>

          <h3 className={styles.route}><Image src={logoRebellion} alt="Logo de l'alliance rebelle" width={24} height={24} style={{ verticalAlign: 'middle' }} /> GET <span className={styles.code}>/api/products/by-title?title=...</span></h3>
          <p className={styles.quote}>Renvoie un produit à partir de son titre exact (recherche insensible aux majuscules et accents).</p>

          <h2 className={styles.subheading}><Image src={deathStar} alt="Etoile de la mort" width={32} height={32} style={{ verticalAlign: 'middle' }} /> Exemple de réponse</h2>
            <CodeBlock code={JSONResponse} />
          <h2 className={styles.subheading}><Image src={destroyer} alt="Vaisseau destroyer impérial" width={32} height={32} style={{ verticalAlign: 'middle' }} /> Format des données JSON</h2>
            <CodeBlock code={JSONObjectExample} />     
          <h2 className={styles.subheading}><Image src={milleniumFalcon} alt="Vaisseau Millenium Falcon" width={32} height={32} style={{ verticalAlign: 'middle' }} /> Contributeur</h2>
          <p className={styles.paragraph}>
            {contributorPresentation01}
          </p>
          <p className={styles.paragraph}><br />
            {contributorPresentation02}
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Que les dataries républicaines soient avec vous !<br />
          Visitez :{' '}
          <a
            href="https://www.star-wars-encyclopedia.com/shopping/market"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Star Wars Encyclopedia Market
          </a>
        </p>
      </footer>
    </div>
  );
}