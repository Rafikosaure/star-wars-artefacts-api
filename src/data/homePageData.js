export const apiPresentation = "Cette API présente des artefacts divers liés à Star Wars, l'univers de fiction imaginé par Georges Lucas. Elle a été conçue originellement par un développeur passionné de Star Wars dans le but de fournir à l'un de ses projets e-commerce des produits de vente liés à ce space-opéra iconique. C'est pour cette raison que les artefacts listés ont la structure de produits de vente, avec des clés de données spécifiques. Toutefois, d'autres usages que l'e-commerce sont possibles. L'API permet grâce à sa structure de lister, filtrer et organiser par pages ces artefacts."

export const contributorPresentation01 = "Je suis Rafik Ben Sadi, développeur fullstack et fan d'univers de fantasy. Cette API disponible à tous est à l'origine prévue pour l'un de mes projets personnels, un Wiki sur Star Wars intégrant une boutique en ligne où l'on peut faire ses emplettes avec... des artefacts issus de Star Wars !"

export const contributorPresentation02 = "Ces artefacts sont parfois imaginés ou inspirés de l'univers Canon, de Legends, ou bien sont totalement imaginés à partir du lore. On en trouve de tous les genres : les sabres laser blanc d'Ahsoka Tano, des ouvrages précieux tel le journal intime de Padme Amidala ou les livres sacrés des anciens Jedi... et même un gigantesque fragment de l’Étoile de la Mort, pêché directement dans les profondeurs de Kef Bir !"

export const originApiImages = "Pour information, les images utilisées dans cette API ont toutes été générées par intelligence artificielle dans le respect du droit d'auteur."

export const JSONResponse = 
`{
    "data": [
        {
        "id": "67eebf...",
        "title": "L'holocron de Dark Nihilus",
        "description": "Artefact rare contenant...",
        "price": "250 000",
        ...
        }
    ],
    "pagination": {
        "total": 27,
        "page": 1,
        "pageSize": 6,
        "totalPages": 5
    }
}`

export const JSONObjectExample = 
`{
    "id": "67eebf...",
    "title": "L’holocron de Dark Nihilus",
    "description": "Artefact rare contenant...",
    "price": "250 000",
    "currencyCode": "dataries",
    "maxQuantity": 1,
    "imageUrl": ".../images/holocron_dark_nihilus.webp",
    "largeImageUrl": ".../images/large/holocron_dark_nihilus_large.webp",
    "isActive": true,
    "tags": [
        "relique",
        "sith",
        "rare",
        "côté obscur de la force"
    ],
    "materials": [
        "cristal de mémoire kyber",
        "obsidienne"
    ]
}`