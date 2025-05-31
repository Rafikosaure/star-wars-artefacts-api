// src/app/page.js
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.heading}>
          Star Wars Artefacts API – Documentation
        </h1>

        <p className={styles.paragraph}>
          Cette API a été conçue par un développeur passionné de Star Wars, dans le but de simuler un site e-commerce où les utilisateurs peuvent explorer, filtrer et consulter des artefacts de l'univers Star Wars. Ces artefacts peuvent être issus du canon officiel, de l'univers Legends, ou encore totalement imaginaires.
        </p>

        <h2 className={styles.subheading}>🌐 Base URL</h2>
        <pre className={styles.code}><code>http://localhost:3000/api/products</code></pre>

        <h2 className={styles.subheading}>🔍 Routes disponibles</h2>
        <h3 className={styles.route}>✅ GET /api/products</h3>
        <p>Renvoie une liste de produits avec pagination, tri, recherche et filtres.</p>
        <ul className={styles.unorderedlist}>
          <li><code>page</code> – numéro de page (par défaut : 1)</li>
          <li><code>limit</code> – nombre d’éléments par page ou "all"</li>
          <li><code>sort</code> – <code>title_asc</code>, <code>price_desc</code>, etc.</li>
          <li><code>limitRandom</code> – à utiliser avec <code>sort=random</code></li>
          <li><code>tags</code>, <code>excludeTags</code> – filtres par mots-clés</li>
          <li><code>q</code> – recherche texte</li>
        </ul>

        <h3 className={styles.route}>✅ GET /api/products/[id]</h3>
        <p>Renvoie un produit par son <code>id</code> exact.</p>

        <h3 className={styles.route}>✅ GET /api/products/by-title?title=...</h3>
        <p>Renvoie un produit à partir de son titre exact (recherche insensible aux majuscules et accents).</p>

        <h2 className={styles.subheading}>📦 Exemple de réponse</h2>
        <pre className={styles.code}><code>{`{
  "data": [
    {
      "id": "67eebf...",
      "title": "L'holocron de Dark Nihilus",
      "price": 399.99,
      "tags": ["Sith", "Ancien"],
      ...
    }
  ],
  "pagination": {
    "total": 27,
    "page": 1,
    "pageSize": 6,
    "totalPages": 5
  }
}`}</code></pre>

        <h2 className={styles.subheading}>📂 Format des données JSON</h2>
        <pre className={styles.code}><code>{`{
  "id": "67eebf...",
  "title": "L'holocron de Dark Nihilus",
  "description": "Artefact sith renfermant les connaissances du Seigneur Nihilus.",
  "price": 399.99,
  "isActive": true,
  "tags": ["Sith", "Ancien", "Légends"],
  "imageUrl": "/images/holocron.jpg",
  "largeImageUrl": "/images/large/holocron.jpg"
}`}</code></pre>

        <h2 className={styles.subheading}>🚀 Contributeur</h2>
        <p className={styles.paragraph}>
          Je suis Rafik Ben Sadi, développeur fullstack et fan d'univers de fantasy. Cette API disponible à tous est à l'origine prévue pour l'un de mes projets personnels, un Wiki sur Star Wars intégrant une boutique en ligne où l'on peut faire ses emplettes avec... des artefacts issus de Star Wars !
        </p>
        <p className={styles.paragraph}>
          Ces artefacts sont parfois imaginés ou inspirés de l'univers Canon, Legends, ou bien sont totalement inventés. On en trouve de tous les genres : les sabres laser blanc d'Ahsoka Tano, des ouvrages précieux tel le journal des Whills ou les livres sacrés des anciens Jedi... ou même un gigantesque fragment de l’Étoile de la Mort, pêché directement dans les profondeurs de Kef Bir !
        </p>
      </main>

      <footer className={styles.footer}>
        <p>
          Que la Force et les dataries républicaines soient avec vous !<br />
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