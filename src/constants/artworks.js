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
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779954/Artworks/uncomfortablefutures/uncomfortable0_fepbm7.jpg',
    tags: [all, sculpture, designFiction]
  },
  {
    id: createID(),
    caption: 'Dunkle Ecken Archive',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652008383/Artworks/previewpics/mockup1_pjr71u.png',
    tags: [all, webDesign]
  },
  {
    id: createID(),
    caption: 'canederli AR',
    imageSrc:
      //'https://res.cloudinary.com/dojsjcecs/image/upload/v1652008383/Artworks/previewpics/canederli5_kmbh7k.jpg',
      //'https://res.cloudinary.com/dojsjcecs/image/upload/v1652007282/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_14.54.24_sbttqd.png',
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652011575/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_16.03_Kopie_m8fqpl.jpg',
    tags: [all, augumentedReality]
  },
  {
    id: createID(),
    caption: 'Zueinander - trovarsi',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009387/Artworks/previewpics/zueinander_web11_eihevi.png',
    //      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652007219/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_14.49.45_fhlgkl.png',
    tags: [all, webDesign, productDesign]
  },
  {
    id: createID(),
    caption: '(Im)perceptible',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779624/Artworks/imperceptible/imperceptible3_zjigh1.jpg',
    tags: [all, productDesign, designFiction]
  },
  {
    id: createID(),
    caption: 'forecast',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779602/Artworks/forecast/forecast03_Kopie_kmcoji.jpg',
    tags: [all, newMedia, designFiction]
  },
  {
    id: createID(),
    caption: 'Wos geat?',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652010337/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_15.44.04_iuyxjf.png',
    tags: [all, augumentedReality]
  },
  {
    id: createID(),
    caption: 'bodynamics',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779017/Artworks/bodynamics/bodynamics8_gfmdl5.jpg',
    tags: [all, photo]
  },
  {
    id: createID(),
    caption: 'MTRX',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009386/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_15.21.54_vw0t3b.png',
    tags: [all, film]
  },
  {
    id: createID(),
    caption: 'datadust 2',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009388/Artworks/previewpics/datadust24_h7n0eu.jpg',
    tags: [all, productDesign, newMedia]
  },
  {
    id: createID(),
    caption: 'datadust 1',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779536/Artworks/datadust1/datadust004_tfhd3z.jpg',
    tags: [all, productDesign, newMedia]
  },
  {
    id: createID(),
    caption: 'Pattern App',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009387/Artworks/previewpics/patternapp5_gt2bjl.jpg',
    tags: [all, newMedia]
  },
  {
    id: createID(),
    caption: 'Industrial scars',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779731/Artworks/industrialscars/industrialscars1_xv57pb.jpg',
    tags: [all, photo]
  },
  {
    id: createID(),
    caption: 'naOAc',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009829/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_15.35.23_lqrolh.png',
    tags: [all, film]
  },
  {
    id: createID(),
    caption: 'cornserve',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009913/Artworks/previewpics/cornserve2_namt4u.jpg',
    tags: [all, film, productDesign, newMedia]
  },
  {
    id: createID(),
    caption: 'Mirage',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779747/Artworks/mirage/mirage3_ivkhuu.jpg',
    tags: [all, film, productDesign, newMedia]
  }
];

export const searchParam = 'filter';
