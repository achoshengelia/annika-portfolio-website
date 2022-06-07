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
    alt: 'A chair covered in white snow grass with letter cut out saying uncomfortable futures'
  },
  {
    id: createID(),
    caption: 'Dunkle Ecken Archive',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652008383/Artworks/previewpics/mockup1_pjr71u.png',
    tags: [all, webDesign],
    alt: 'Laptop infront of neon yellow background showing the website Dark Corners'
  },
  {
    id: createID(),
    caption: 'Knedl AR',
    imageSrc:
      //'https://res.cloudinary.com/dojsjcecs/image/upload/v1652008383/Artworks/previewpics/canederli5_kmbh7k.jpg',
      //'https://res.cloudinary.com/dojsjcecs/image/upload/v1652007282/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_14.54.24_sbttqd.png',
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652011575/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_16.03_Kopie_m8fqpl.jpg',
    tags: [all, augumentedReality],
    alt: 'Many spinach dumplings that form the word Knedl'
  },
  {
    id: createID(),
    caption: 'Zueinander - trovarsi',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009387/Artworks/previewpics/zueinander_web11_eihevi.png',
    //      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652007219/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_14.49.45_fhlgkl.png',
    tags: [all, webDesign, productDesign],
    alt: 'Website shows pictures of 3 people walking towards a neon orange park bench with alternating backrest'
  },
  {
    id: createID(),
    caption: 'Between Pain',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1654083952/Artworks/Between%20Pain/betweenPain_Kopie_bg8z4f.jpg',
    tags: [all, photo],
    alt: 'An half open elevetor covering the female passenger'
  },
  {
    id: createID(),
    caption: 'Sundew',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1654083944/Artworks/Between%20Pain/sundew-2_m8maj2.jpg',
    tags: [all, film],
    alt: 'A computer drawn Cape Sundew plant in dark blue and green colors'
  },
  {
    id: createID(),
    caption: '(Im)perceptible',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779624/Artworks/imperceptible/imperceptible3_zjigh1.jpg',
    tags: [all, productDesign, designFiction],
    alt: 'Electronic and air quality sensors inside a 3d printed case'
  },
  {
    id: createID(),
    caption: 'forecast',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779602/Artworks/forecast/forecast03_Kopie_kmcoji.jpg',
    tags: [all, newMedia, designFiction],
    alt: 'Color infrared weather aesthetic projected on water steam'
  },
  {
    id: createID(),
    caption: 'Wos geat',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652010337/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_15.44.04_iuyxjf.png',
    tags: [all, augumentedReality],
    alt: 'A face filter showing a Watten card above the face of the user'
  },

  {
    id: createID(),
    caption: 'bodynamics',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779017/Artworks/bodynamics/bodynamics8_gfmdl5.jpg',
    tags: [all, photo],
    alt: 'A red body in a twisted position in front of a black background'
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
    alt: 'A mostly grey analog picture shot inside a glass house with a girl talking selfies in the background'
  },
  {
    id: createID(),
    caption: 'MTRX',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009386/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_15.21.54_vw0t3b.png',
    tags: [all, film],
    alt: 'Neon green squares of different shapes on black backgronud create a matrix pattern'
  },

  {
    id: createID(),
    caption: 'datadust 2',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009388/Artworks/previewpics/datadust24_h7n0eu.jpg',
    tags: [all, productDesign, newMedia],
    alt: 'Four hour glasses filled with different amount of black sand'
  },
  {
    id: createID(),
    caption: 'datadust 1',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779536/Artworks/datadust1/datadust004_tfhd3z.jpg',
    tags: [all, productDesign, newMedia],
    alt: 'Four 3d printed hour glasses in different forms and different colored sand'
  },
  {
    id: createID(),
    caption: 'Pattern App',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009387/Artworks/previewpics/patternapp5_gt2bjl.jpg',
    tags: [all, newMedia],
    alt: 'A programm showing a colorful striped square, which was created by the chat behaivior'
  },
  {
    id: createID(),
    caption: 'Industrial scars',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779731/Artworks/industrialscars/industrialscars1_xv57pb.jpg',
    tags: [all, photo],
    alt: 'A tree growing on concrete column of a half collapsed fabric ruin'
  },
  {
    id: createID(),
    caption: 'naOAc',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009829/Artworks/previewpics/Bildschirmfoto_2022-05-08_um_15.35.23_lqrolh.png',
    tags: [all, film],
    alt: 'A close up of a cristalisation process in blue colors'
  },
  {
    id: createID(),
    caption: 'cornserve',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652009913/Artworks/previewpics/cornserve2_namt4u.jpg',
    tags: [all, film, productDesign, newMedia],
    alt: 'A girl standing behind a hologram showing a cucumber plant growing'
  },
  {
    id: createID(),
    caption: 'Mirage',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779747/Artworks/mirage/mirage3_ivkhuu.jpg',
    tags: [all, film, productDesign, newMedia],
    alt: 'A white 3d modeled head twists and deforms in front of black background'
  }
];

export const searchParam = 'filter';
