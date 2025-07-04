import config from '../../../config'
import path from 'path';
import { promises as fs } from 'fs';
import { parseQueryParams } from '@/utils/parseQueryParams';
import { filterAndSortProducts } from '@/utils/filterAndSortProducts';
import { paginateProducts } from '@/utils/paginateProducts';
import { jsonResponse } from '@/utils/jsonResponse';
import { withBaseUrl } from '@/utils/withBaseUrl';

export async function GET(request) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'products.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(data);

    const { searchParams } = new URL(request.url);

    const { page, limit, sort, tags, excludeTags, queryTerms, limitRandom } = parseQueryParams(searchParams);
    const sortedProducts = filterAndSortProducts(products, sort, tags, excludeTags, queryTerms, limitRandom);

    if (limit === 'all') {
      const enrichedProducts = withBaseUrl(sortedProducts, config.baseUrl);
      return jsonResponse({
        data: enrichedProducts,
        pagination: {
          total: sortedProducts.length,
          page: 1,
          pageSize: sortedProducts.length,
          totalPages: 1,
        },
      });
    }

    const result = paginateProducts(sortedProducts, page, limit);
    const enrichedPaginated = {
      ...result,
      data: withBaseUrl(result.data, config.baseUrl),
    };
    return jsonResponse(enrichedPaginated);

  } catch (error) {
    console.error('Erreur dans la route produits :', error);
    const status = error.message === 'Page invalide' ? 400 : 500;
    return jsonResponse({ message: error.message }, status);
  }
}
