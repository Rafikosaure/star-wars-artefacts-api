// src/utils/shuffleArray.js
export function shuffleArray(array) {
  const arr = [...array]; // ne pas muter l'original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // indice aléatoire
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
  return arr;
}
