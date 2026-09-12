# Mode d'emploi

## 1. Regarder le site

Décompresse le dossier, puis double-clique sur `index.html`. Il s'ouvre dans ton navigateur. Tu peux déjà tout parcourir, y compris le bouton FR/EN.

## 2. Ajouter tes images

Dépose ces fichiers dans le dossier `images` en respectant les noms exactement :

| Nom du fichier | Ce que c'est |
|---|---|
| `portrait.png` | Ta photo, ou une illustration de toi. Format carré, elle s'affiche en rond. |

Les six écrans de RainAlert (`meteo-1` à `meteo-6`) sont déjà dans le dossier, découpés et allégés.
| `optimo-apercu.png` | Une belle capture du site Optimo actuel, format large |
| `optimo-avant.png` | La page d'accueil de l'ancien site |
| `optimo-apres.png` | La page d'accueil du nouveau site, même cadrage |

Le site accepte le `.png` comme le `.jpg` : garde simplement la vraie extension de tes fichiers, sans la modifier à la main. Si une image manque, l'emplacement disparaît au lieu d'afficher une icône cassée.

Pense à réduire le poids des images avant de les déposer (squoosh.app, gratuit). Au-delà de 500 Ko par image, le site devient lent.

## 3. Modifier les textes

Ouvre `index.html` ou `optimo.html` avec un éditeur de texte — VS Code est gratuit et confortable.

Chaque texte existe en deux versions :

```html
<h3 data-fr="Application météo" data-en="Weather app">Application météo</h3>
```

Pour changer un texte, modifie les **trois** endroits : `data-fr`, `data-en`, et le texte entre les balises. Ce dernier est celui qui s'affiche avant que le script ne se lance.

Ton lien LinkedIn est déjà en place.

Pour le CV : dépose tes **deux** PDF à la racine du dossier (à côté de `index.html`), nommés exactement :

- `cv-melissa-brunet-fr.pdf`
- `cv-melissa-brunet-en.pdf`

Le bouton sert le CV français quand le site est en FR et le CV anglais quand il est en EN. Tu n'as rien d'autre à faire.

## 4. Changer les couleurs

Tout est en haut de `style.css`, dans le bloc `:root`. Modifie un code couleur et il change partout sur le site.

## 5. Mettre en ligne

1. Va sur **app.netlify.com/drop**
2. Glisse le dossier `portfolio` entier dans la zone indiquée
3. Le site est en ligne, avec une adresse du type `nom-aleatoire.netlify.app`

Crée un compte gratuit pour garder le site et changer son adresse. Pour le mettre à jour plus tard, tu glisses simplement le dossier à nouveau.

## 6. Nom de domaine (plus tard)

Une adresse comme `melissabrunet.fr` coûte une douzaine d'euros par an chez OVH, Gandi ou Infomaniak. Elle se branche sur Netlify en quelques clics, dans les réglages du site.

---

## Avant de publier

- [ ] Les quatre images sont en place
- [ ] Les deux CV (`-fr.pdf` et `-en.pdf`) sont à la racine du dossier
- [ ] Aucun nom de répondant au questionnaire n'apparaît
- [ ] Le nom de l'agence prestataire n'apparaît sur aucune capture
- [ ] Vérifié sur téléphone
