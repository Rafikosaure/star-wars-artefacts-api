// src/app/api/products/[id]/route.js
import config from '../../../../config'
import path from 'path';
import { promises as fs } from 'fs';
import { jsonResponse } from '@/utils/jsonResponse';
import { withBaseUrl } from '@/utils/withBaseUrl';

export async function GET(request, { params }) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'products.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(data);

    const product = products.find((p) => p.id === params.id);

    if (!product) {
      return jsonResponse({ message: 'Produit introuvable' }, 404);
    }

    const [enrichedProduct] = withBaseUrl([product], config.baseUrl);

    return jsonResponse(enrichedProduct);
  } catch (error) {
    console.error('Erreur lecture produit :', error);
    return jsonResponse({ message: 'Erreur serveur' }, 500);
  }
}
