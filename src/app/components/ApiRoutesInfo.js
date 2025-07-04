// src/app/components/ApiRoutesInfo.js
import Image from 'next/image';
import r2d2 from '../../../public/images/documentation/r2d2.webp';
import logoRebellion from '../../../public/images/documentation/logo_rebellion.webp';
import styles from '../styles/page.module.scss';

export default function ApiRoutesInfo() {
  return (
    <>
      <h2 className={styles.subheading}><Image src={r2d2} alt="Droid R2D2" width={32} height={32} style={{ verticalAlign: 'middle' }} /> Routes        disponibles
      </h2>
      
      <h3 className={styles.firstroute}><Image src={logoRebellion} alt="Logo de l'alliance rebelle" width={24} height={24} style={{ verticalAlign: 'middle' }} /> GET <span className={styles.code}>/api/products</span>
      </h3>
      
      <p className={styles.quote}>Renvoie une liste de produits avec pagination, tri, recherche et filtres.</p>
      
      <ul className={styles.unorderedlist}>
        
        <li className={styles.listitem}><code className={styles.code}>page</code> – numéro de page (par défaut : 1), exemple : <code className={styles.code}>/api/products?page=10</code> vous donne accès à la page 10.</li>
        
        <li className={styles.listitem}><code className={styles.code}>limit</code> – nombre d’éléments par page, exemple : <code className={styles.code}>/api/products?limit=20</code> vous donne accès à 20 éléments.<br />Astuce : <code className={styles.code}>/api/products?limit=all</code> vous donne accès à tous les éléments.</li>
        
        <li className={styles.listitem}><code className={styles.code}>sort</code> – trier par :
          
          <ul className={styles.unorderedlist}>
            <li  className={styles.listitem}><code className={styles.code}>title_asc</code> - ordre alphabétique de titre, exemple : <code className={styles.code}>/api/products?sort=title_asc</code></li>
            <li className={styles.listitem}><code className={styles.code}>title_desc</code> - ordre non-alphabétique de titre, exemple : <code className={styles.code}>/api/products?sort=title_desc</code></li>
            <li className={styles.listitem}><code className={styles.code}>price_asc</code> - ordre croissant par prix, exemple : <code className={styles.code}>/api/products?sort=price_asc</code></li>
            <li className={styles.listitem}><code className={styles.code}>price_desc</code> - ordre décroissant par prix, exemple : <code className={styles.code}>/api/products?sort=price_desc</code></li>
            <li className={styles.listitem}><code className={styles.code}>random</code> - tri aléatoire, exemple : <code className={styles.code}>/api/products?sort=random</code></li>
          </ul>
        
        </li>
        <li className={styles.listitem}><code className={styles.code}>limitRandom</code> – à utiliser avec <code className={styles.code}>sort=random</code>.<br/> Possiblité d&apos;ajouter <code className={styles.code}>limitRandom=N</code> pour limiter le nombre de résultats attendus.<br />Exemple pour 3 éléments choisis aléatoirement : <code className={styles.code}>/api/products?sort=random&limitRandom=3</code>
        </li>
        
        <li className={styles.listitem}><code className={styles.code}>tags</code>, <code className={styles.code}>excludeTags</code> – filtres par mots-clés.<br />Exemple pour récupérer les 10 premiers éléments comportant le tag &quot;jedi&quot; mais excluant le tag &quot;empire&quot; : <code className={styles.code}>/api/products?limit=10&tags=jedi&excludeTags=empire</code>
        </li>
        
        <li className={styles.listitem}><code className={styles.code}>q</code> – recherche textuelle. Les recherches textuelles concernent aussi bien les titres des éléments que leurs descriptions.<br />Exemple pour les 10 premiers éléments dont les titres et descriptions comportent le mot &quot;sabre&quot; : <code className={styles.code}>/api/products?limit=10&q=sabre</code>
        </li>
      
      </ul>

      <h3 className={styles.route}><Image src={logoRebellion} alt="Logo de l'alliance rebelle" width={24} height={24} style={{ verticalAlign: 'middle' }} /> GET <span className={styles.code}>/api/products/[id]</span>
      </h3>
      
      <p className={styles.quote}>Renvoie un produit par son <code className={styles.code}>id</code> exact.</p>
      
      <p className={styles.quote}>Exemple pour récupérer l&apos;holocron de Dark Nihilus par son id : <code className={styles.code}>/api/products/67eebf482d4733d41bdfaccd</code>
      </p>

      <h3 className={styles.route}><Image src={logoRebellion} alt="Logo de l'alliance rebelle" width={24} height={24} style={{ verticalAlign: 'middle' }} /> GET <span className={styles.code}>/api/products/by-title?title=...</span>
      </h3>
      
      <p className={styles.quote}>Renvoie un produit à partir de son titre exact (recherche insensible aux majuscules et accents).</p>
      
      <p className={styles.quote}>Exemple de syntaxe possible pour récupérer par son titre l&apos;holocron de Dark Nihilus : <code className={styles.code}>/api/products/by-title?title=L&apos;hoLôcron dé Dark nïHiluS</code>
      </p>
    </>
  );
}
