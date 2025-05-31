// src/utils/paginateProducts.js
export function paginateProducts(products, page = 1, limit = 6) {
  const total = products.length;
  const totalPages = Math.ceil(total / limit);

  if (page < 1 || page > totalPages) {
    throw new Error('Page invalide');
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = products.slice(start, end);

  return {
    data: paginated,
    pagination: {
      total,
      page,
      pageSize: limit,
      totalPages,
    },
  };
}
