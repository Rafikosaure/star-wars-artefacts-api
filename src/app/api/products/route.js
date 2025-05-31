import path from 'path';
import { promises as fs } from 'fs';
import { parseQueryParams } from '@/utils/parseQueryParams';
import { filterAndSortProducts } from '@/utils/filterAndSortProducts';
import { paginateProducts } from '@/utils/paginateProducts';

export async function GET(request) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'products.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(data);

    const { searchParams } = new URL(request.url);

    const { page, limit, sort, tags, excludeTags, queryTerms, limitRandom } = parseQueryParams(searchParams);
    const sortedProducts = filterAndSortProducts(products, sort, tags, excludeTags, queryTerms, limitRandom);

    if (limit === 'all') {
      return Response.json({
        data: sortedProducts,
        pagination: {
          total: sortedProducts.length,
          page: 1,
          pageSize: sortedProducts.length,
          totalPages: 1,
        },
      });
    }

    const result = paginateProducts(sortedProducts, page, limit);
    return Response.json(result);

  } catch (error) {
    console.error('Erreur dans la route produits :', error);
    const status = error.message === 'Page invalide' ? 400 : 500;
    return new Response(JSON.stringify({ message: error.message }), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
