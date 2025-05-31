import { normalizeText } from "./normalizeText";


export function parseQueryParams(searchParams) {
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limitParam = searchParams.get('limit') || '6';
    const sort = searchParams.get('sort') || 'title_asc';

    const tagsParam = searchParams.get('tags');
    const tags = tagsParam
        ? tagsParam.split(',').map(tag => tag.trim().toLowerCase())
        : [];

    const excludeTagsParam = searchParams.get('excludeTags');
    const excludeTags = excludeTagsParam
        ? excludeTagsParam.split(',').map(tag => tag.trim().toLowerCase())
        : [];

    const qParam = searchParams.get('q');
    const queryTerms = qParam
        ? qParam.split(',').map(term => normalizeText(term.trim())).filter(Boolean)
        : [];
    
    const limitRandomParam = searchParams.get('limitRandom');
    const limitRandom = limitRandomParam ? parseInt(limitRandomParam, 10) : null;

    return {
        page,
        limit: limitParam === 'all' ? 'all' : parseInt(limitParam, 10),
        sort,
        tags,
        excludeTags,
        queryTerms,
        limitRandom,
    };
}
