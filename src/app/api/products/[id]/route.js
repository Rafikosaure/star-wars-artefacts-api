// src/app/api/products/[id]/route.js
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request, { params }) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'products.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(data);

    const product = products.find((p) => p.id === params.id);

    if (!product) {
      return new Response(JSON.stringify({ message: 'Produit introuvable' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return Response.json(product);
  } catch (error) {
    console.error('Erreur lecture produit :', error);
    return new Response(JSON.stringify({ message: 'Erreur serveur' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
