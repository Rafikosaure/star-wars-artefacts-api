// app/components/CodeBlockWrapper.jsx
'use client';
import dynamic from 'next/dynamic';

const CodeBlock = dynamic(() => import('./CodeBlock'), { ssr: false });

export default function CodeBlockWrapper({ code, language }) {
  return <CodeBlock code={code} language={language} />;
}
