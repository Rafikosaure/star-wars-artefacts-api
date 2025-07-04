import config from '../../../../config'
import path from 'path';
import { promises as fs } from 'fs';
import { normalizeText } from '@/utils/normalizeText.js';
import { jsonResponse } from '@/utils/jsonResponse';
import { withBaseUrl } from '@/utils/withBaseUrl';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const titleParam = searchParams.get('title');

    if (!titleParam) {
      return jsonResponse({ message: 'Paramètre "title" requis' }, 400);
    }

    const filePath = path.join(process.cwd(), 'src', 'data', 'products.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(data);

    const normalizedQuery = normalizeText(titleParam);

    const match = products.find(p => normalizeText(p.title) === normalizedQuery);

    if (!match) {
      return jsonResponse({ message: 'Produit introuvable' }, 404);
    }

    const [enrichedMatch] = withBaseUrl([match], config.baseUrl);

    return jsonResponse(enrichedMatch);
  } catch (error) {
    console.error('Erreur recherche produit par nom :', error);
    return jsonResponse({ message: 'Erreur serveur' }, 500);
  }
}
