// src/utils/withBaseUrl.js
export function withBaseUrl(products, baseUrl) {
  return products.map(product => ({
    ...product,
    imageUrl: `${baseUrl}${product.imageUrl}`,
    largeImageUrl: `${baseUrl}${product.largeImageUrl}`,
  }));
}
