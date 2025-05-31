// src/utils/normalizeText.js
export function normalizeText(text) {
  return text
    .normalize('NFD')                      // décompose les caractères accentués
    .replace(/[\u0300-\u036f]/g, '')       // supprime les diacritiques
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'") // apostrophes typographiques → ASCII
    .replace(/[\u201C\u201D\u201E]/g, '"') // guillemets typographiques → ASCII
    .toLowerCase();                        // minuscule
}
