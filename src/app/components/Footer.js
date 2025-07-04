// src/app/components/Footer.js
import styles from '../styles/page.module.scss';

export default function Footer() {
  return (
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
  );
}
