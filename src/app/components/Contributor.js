// src/app/components/Contributor.js
import Image from 'next/image';
import styles from '../styles/page.module.scss';
import milleniumFalcon from '../../../public/images/documentation/millenium_falcon.webp';

export default function Contributor({ presentation01, presentation02, imageInfo }) {
  return (
    <>
      <h2 className={styles.subheading}>
        <Image
          src={milleniumFalcon}
          alt="Vaisseau Millenium Falcon"
          width={32}
          height={32}
          style={{ verticalAlign: 'middle' }}
        />{' '}
        Contributeur
      </h2>
      <p className={styles.paragraph}>
        {presentation01}
      </p>
      <p className={styles.paragraph}><br />{presentation02}</p>
      <p className={styles.paragraph}><br />{imageInfo}</p>
    </>
  );
}
