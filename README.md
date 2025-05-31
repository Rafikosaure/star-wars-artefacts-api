# Star Wars Artefacts API – Documentation

Cette API a été conçue par un développeur passionné de Star Wars, dans le but de simuler un site e-commerce où les utilisateurs peuvent explorer, filtrer et consulter des artefacts de l'univers Star Wars. Ces artefacts peuvent être issus du canon officiel, de l'univers Legends, ou encore totalement imaginaires.

## 🌐 Base URL

```
http://localhost:3000/api/products
```

## 🔍 Routes disponibles

### ✅ `GET /api/products`

Renvoie une liste de produits (artefacts), avec support de pagination, tri, recherche et filtres par tags.

#### Paramètres de requête (query params)

| Paramètre     | Type         | Description                                                           |
| ------------- | ------------ | --------------------------------------------------------------------- |
| `page`        | number       | Numéro de page (par défaut: 1)                                        |
| `limit`       | number/“all” | Nombre d'éléments par page (par défaut: 6) ou "all" pour tout obtenir |
| `sort`        | string       | `title_asc`, `title_desc`, `price_asc`, `price_desc`, `random`        |
| `limitRandom` | number       | Si `sort=random`, limite le nombre de résultats                       |
| `tags`        | string       | Tags à inclure, séparés par virgules (ex: `Sith,rare`)                |
| `excludeTags` | string       | Tags à exclure (ex: `Canon`)                                          |
| `q`           | string       | Recherche texte dans `title` et `description` (ex: `holocron,ancien`) |

#### Exemple

```
GET /api/products?page=1&limit=6&sort=title_asc&tags=Sith&q=holocron
```

#### Réponse

```json
{
  "data": [
    {
      "id": "67eebf...",
      "title": "L'holocron de Dark Nihilus",
      ...
    },
    ...
  ],
  "pagination": {
    "total": 27,
    "page": 1,
    "pageSize": 6,
    "totalPages": 5
  }
}
```

---

### ✅ `GET /api/products/[id]`

Renvoie un produit unique correspondant à son `id` exact.

#### Exemple

```
GET /api/products/67eebf482d4733d41bdfaccd
```

#### Réponse en cas de succès

```json
{
  "id": "67eebf...",
  "title": "L'holocron de Dark Nihilus",
  ...
}
```

#### Réponse en cas d'erreur

```json
{
  "message": "Produit introuvable"
}
```

---

### ✅ `GET /api/products/by-title?title=...`

Permet de retrouver un produit à partir de son titre exact (insensible aux accents, majuscules, etc.).

#### Exemple

```
GET /api/products/by-title?title=L'holocron de Dark Nihilus
```

#### Réponse

Comme la route `/[id]`, renvoie un objet produit.

---

## 📂 Format des données JSON

Chaque produit suit cette structure :

```json
{
  "id": "67eebf...",
  "title": "L'holocron de Dark Nihilus",
  "description": "Artefact sith renfermant les connaissances du Seigneur Nihilus.",
  "price": 399.99,
  "isActive": true,
  "tags": ["Sith", "Ancien", "Légends"],
  "imageUrl": "/images/holocron.jpg",
  "largeImageUrl": "/images/large/holocron.jpg"
}
```

## 🔄 Historique

- API initialement fondée sur un fichier JSON local
- Évolution prévue vers une base MongoDB ou PostgreSQL
- Architecture App Router (Next.js 13+)

---

## 🚀 Contributeur

Je suis Rafik Ben Sadi, développeur fullstack et fan d'univers de fantasy. Cette API disponible à tous est à l'origine prévue pour l'un de mes projets personnels, un Wiki sur Star Wars intégrant une boutique en ligne où l'on peut faire ses emplettes avec... des artefacts issus de Star Wars !

Ces artefacts sont parfois imaginés ou inspirés de l'univers Canon, Legends, ou bien sont totalement imaginés. On en trouve de tous les genres : les sabres laser blanc d'Ahsoka Tano, des ouvrages précieux tel le journal des Whills ou les livres sacrés des anciens Jedi... ou même un gigantesque fragment de l’Étoile de la Mort, pêché directement dans les profondeurs de Kef Bir !

Si vous désirez vous immerger dans cet galaxie lointaine, très lointaine, il vous suffit de cliquer sur ce lien : www\.star-wars-encyclopedia.com/shopping/market . J'espère sincèrement que cette visite vous plaira !

Que la Force et les dataries républicaines soient avec vous !
