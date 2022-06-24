import { v4 as createID } from 'uuid';

const all = 'all';
const webDesign = 'web design';
const photo = 'photo';
const newMedia = 'new media';
const augumentedReality = 'augumented reality';
const designFiction = 'design-fiction';
const film = 'film';
const sculpture = 'sculpture';
const productDesign = 'product design';
const archived = 'archived';

export const artworkFilterItems = [
  all,
  webDesign,
  photo,
  newMedia,
  augumentedReality,
  designFiction,
  film,
  sculpture,
  productDesign,
  archived
];

export const artworkItems = [
  {
    id: createID(),
    caption: 'Uncomfortable Futures',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/design/uncomfortable/uncomfortable0.jpg',
    tags: [all, sculpture, designFiction],
    alt: 'Uncomfortable Futures, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Dunkle Ecken Archive',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/preview/mockup1.png',
    tags: [all, webDesign],
    alt: 'Dunkle Ecken Archive, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Knedl AR',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/design/canederliAR/Bildschirmfoto%2B2022-05-08%2Bum%2B14.54.24.png',
    tags: [all, augumentedReality],
    alt: 'Knedl AR, AR Filter Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Zueinander - trovarsi',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/preview/zueinander_web11.png',
    tags: [all, webDesign, productDesign],
    alt: 'Zueinander (finden) - trovarsi, Annika Terwey '
  },
  {
    id: createID(),
    caption: 'Between Pain',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/design/between_pain/betweenPain+Kopie.jpg',
    tags: [all, photo],
    alt: 'Between Pain, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Sundew',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/design/sundew/Sundew.jpg',
    tags: [all, film],
    alt: 'Sundew music video by Annika Terwey for Cape Sundew'
  },
  {
    id: createID(),
    caption: '(Im)perceptible',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/design/imperceptible/imperceptible3.jpg',
    tags: [all, productDesign, designFiction],
    alt: '(Im)perceptible, Airquality wearable by Annika Terwey'
  },
  {
    id: createID(),
    caption: 'forecast',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/design/forecast/forecast03+Kopie.jpg',
    tags: [all, newMedia, designFiction],
    alt: 'forecast, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Wos geat',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/preview/Bildschirmfoto+2022-05-08+um+15.44.04.png',
    tags: [all, augumentedReality],
    alt: 'Wos geat - AR Filter, Annika Terwey'
  },

  {
    id: createID(),
    caption: 'bodynamics',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/design/bodynamics/bodynamics8.jpg',
    tags: [all, photo],
    alt: 'Bodynamics, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Shades of grey',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/design/shade+of+grey/imm023_21A.jpg',
    tags: [all, photo],
    alt: 'Shades of grey, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'MTRX',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/design/mtrx/Bildschirmfoto+2022-05-08+um+15.21.54.png',
    tags: [all, film],
    alt: 'MTRX animation by Annika Terwey'
  },
  {
    id: createID(),
    caption: 'datadust 2',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/preview/datadust24.jpg',
    tags: [all, productDesign, newMedia],
    alt: 'datadust 2, hourglass data visualisation by Annika Terwey'
  },
  {
    id: createID(),
    caption: 'datadust 1',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/design/datadust1/datadust004.jpg',
    tags: [all, productDesign, newMedia],
    alt: 'datadust 1 - hourglass data visualisation by Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Pattern App',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/preview/patternapp5.jpg',
    tags: [all, newMedia],
    alt: 'Pattern App, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Industrial scars',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/design/industrial_scars/industrialscars1.jpg',
    tags: [all, photo],
    alt: 'Industrial scars, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'naOAc',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/preview/naoac.png',
    tags: [all, film],
    alt: 'naOAc, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'cornserve',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/preview/cornserve2.jpg',
    tags: [all, film, productDesign, newMedia],
    alt: 'cornserve, hologram installation by Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Mirage',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/design/mirage/mirage3.jpg',
    tags: [all, film, productDesign, newMedia],
    alt: 'mirage, hologram installation by Annika Terwey'
  }
];

export const searchParam = 'filter';
