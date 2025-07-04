'use client'
import styles from '../styles/page.module.scss'
import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism.css';

export default function CodeBlock({ code, language = 'json' }) {
  const codeRef = useRef(null);

  useEffect(() => {
    Prism.highlightElement(codeRef.current);
  }, []);

  return (
    <div className={styles.codeblockcontainer}>
        <pre className={styles.codeblock}>
            <code ref={codeRef} className={`language-${language}`}>
                {code}
            </code>
        </pre>
    </div>
    
  );
}
