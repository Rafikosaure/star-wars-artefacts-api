import { normalizeText } from './normalizeText.js';
import { shuffleArray } from './shuffleArray.js';


export function filterAndSortProducts(
    products, 
    sort = 'title_asc', 
    tags = [], 
    excludeTags = [], 
    queryTerms = [], 
    limitRandom = null
) {
    const filtered = products.filter(product => {
        if (!product.isActive) return false;

        const productTags = product.tags?.map(t => t.toLowerCase()) || [];
        const includesTags = tags.every(tag => productTags.includes(tag));
        const excludesTags = excludeTags.every(tag => !productTags.includes(tag));

        const normalizedTitle = normalizeText(product.title || '');
        const normalizedDescription = normalizeText(product.description || '');

        const matchesQuery = queryTerms.length > 0
        ? queryTerms.some(term =>
            normalizedTitle.includes(term) || normalizedDescription.includes(term)
        ) : true;


        return includesTags && excludesTags && matchesQuery;
    });

    switch (sort) {
        case 'random': {
            const shuffled = shuffleArray(filtered);
            return limitRandom ? shuffled.slice(0, limitRandom) : shuffled;
        }
        
        case 'title_asc':
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
        
        case 'title_desc':
        return filtered.sort((a, b) => b.title.localeCompare(a.title));
        
        case 'price_asc':
        return filtered.sort((a, b) => a.price - b.price);
        
        case 'price_desc':
        return filtered.sort((a, b) => b.price - a.price);
        
        default:
        return filtered;
    }
}
