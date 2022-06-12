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
    tags: [all, sculpture, designFiction],
    alt: 'Uncomfortable Futures, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Dunkle Ecken Archive',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652008383/Artworks/previewpics/mockup1_pjr71u.png',
    tags: [all, webDesign],
    alt: 'Dunkle Ecken Archive, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Knedl AR',
    imageSrc:
      //'https://res.cloudinary.com/dojsjcecs/image/upload/v1652008383/Artworks/previewpics/canederli5_kmbh7k.jpg',
      //'https://res.cloudinary.com/dojsjcecs/image/upload/v1652007282/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_14.54.24_sbttqd.png',
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652011575/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_16.03_Kopie_m8fqpl.jpg',
    tags: [all, augumentedReality],
    alt: 'Knedl AR, AR Filter Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Zueinander - trovarsi',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009387/Artworks/previewpics/zueinander_web11_eihevi.png',
    //      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652007219/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_14.49.45_fhlgkl.png',
    tags: [all, webDesign, productDesign],
    alt: 'Zueinander (finden) - trovarsi, Annika Terwey '
  },
  {
    id: createID(),
    caption: 'Between Pain',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1654083952/Artworks/Between%20Pain/betweenPain_Kopie_bg8z4f.jpg',
    tags: [all, photo],
    alt: 'Between Pain, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Sundew',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1654083944/Artworks/Between%20Pain/sundew-2_m8maj2.jpg',
    tags: [all, film],
    alt: 'Sundew music video by Annika Terwey for Cape Sundew'
  },
  {
    id: createID(),
    caption: '(Im)perceptible',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779624/Artworks/imperceptible/imperceptible3_zjigh1.jpg',
    tags: [all, productDesign, designFiction],
    alt: '(Im)perceptible, Airquality wearable by Annika Terwey'
  },
  {
    id: createID(),
    caption: 'forecast',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779602/Artworks/forecast/forecast03_Kopie_kmcoji.jpg',
    tags: [all, newMedia, designFiction],
    alt: 'forecast, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Wos geat',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652010337/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_15.44.04_iuyxjf.png',
    tags: [all, augumentedReality],
    alt: 'Wos geat - AR Filter, Annika Terwey'
  },

  {
    id: createID(),
    caption: 'bodynamics',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779017/Artworks/bodynamics/bodynamics8_gfmdl5.jpg',
    tags: [all, photo],
    alt: 'Bodynamics, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Shades of grey',
    imageSrc:
      // 'https://res.cloudinary.com/dojsjcecs/image/upload/v1654085727/Artworks/Grey%20Shades/IMG_0300_jvs5js.jpg',
      // 'https://res.cloudinary.com/dojsjcecs/image/upload/v1654085727/Artworks/Grey%20Shades/156068_bonuon.jpg',
      // 'https://res.cloudinary.com/dojsjcecs/image/upload/v1654085729/Artworks/Grey%20Shades/IMG_6867_aknhuu.jpg',
      //'https://res.cloudinary.com/dojsjcecs/image/upload/v1654085729/Artworks/Grey%20Shades/145140_vwn6lg.jpg',
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1654085729/Artworks/Grey%20Shades/imm023_21A_tdqqqf.jpg',
    tags: [all, photo],
    alt: 'Shades of grey, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'MTRX',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009386/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_15.21.54_vw0t3b.png',
    tags: [all, film],
    alt: 'MTRX animation by Annika Terwey'
  },

  {
    id: createID(),
    caption: 'datadust 2',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009388/Artworks/previewpics/datadust24_h7n0eu.jpg',
    tags: [all, productDesign, newMedia],
    alt: 'datadust 2, hourglass data visualisation by Annika Terwey'
  },
  {
    id: createID(),
    caption: 'datadust 1',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779536/Artworks/datadust1/datadust004_tfhd3z.jpg',
    tags: [all, productDesign, newMedia],
    alt: 'datadust 1 - hourglass data visualisation by Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Pattern App',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009387/Artworks/previewpics/patternapp5_gt2bjl.jpg',
    tags: [all, newMedia],
    alt: 'Pattern App, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Industrial scars',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779731/Artworks/industrialscars/industrialscars1_xv57pb.jpg',
    tags: [all, photo],
    alt: 'Industrial scars, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'naOAc',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009829/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_15.35.23_lqrolh.png',
    tags: [all, film],
    alt: 'naOAc, Annika Terwey'
  },
  {
    id: createID(),
    caption: 'cornserve',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009913/Artworks/previewpics/cornserve2_namt4u.jpg',
    tags: [all, film, productDesign, newMedia],
    alt: 'cornserve, hologram installation by Annika Terwey'
  },
  {
    id: createID(),
    caption: 'Mirage',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779747/Artworks/mirage/mirage3_ivkhuu.jpg',
    tags: [all, film, productDesign, newMedia],
    alt: 'mirage, hologram installation by Annika Terwey'
  }
];

export const searchParam = 'filter';
