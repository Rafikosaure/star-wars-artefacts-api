import path from 'path';
import { promises as fs } from 'fs';
import { normalizeText } from '@/utils/normalizeText.js';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const titleParam = searchParams.get('title');

    if (!titleParam) {
      return new Response(JSON.stringify({ message: 'Paramètre "title" requis' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const filePath = path.join(process.cwd(), 'src', 'data', 'products.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(data);

    const normalizedQuery = normalizeText(titleParam);

    const match = products.find(p => normalizeText(p.title) === normalizedQuery);

    if (!match) {
      return new Response(JSON.stringify({ message: 'Produit introuvable' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return Response.json(match);
  } catch (error) {
    console.error('Erreur recherche produit par nom :', error);
    return new Response(JSON.stringify({ message: 'Erreur serveur' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
