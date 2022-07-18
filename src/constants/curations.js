import { v4 as createID } from 'uuid';

const all = 'all';
const onlineExhibition = 'online exhibition';
const exhibition = 'exhibition';

export const curationFilterItems = [all, onlineExhibition, exhibition];

export const curationItems = [
  {
    id: createID(),
    caption: 'Extrasober',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779864/Curation/extrasober%20/Extrasober5_mf0he5.jpg',
    tags: [all, onlineExhibition],
    alt: 'Extrasober, virtual art exhibition about drinking culture, Forum Präventions, Annika Terwey, Sophie Lazari, Vinzenz Aubry, Robyn Steffen, ... '
  },
  {
    id: createID(),
    caption: 'Dunkle Ecken',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779279/Curation/dunkleecken/dunkleecken6_pe4xhm.jpg',
    tags: [all, onlineExhibition, exhibition],
    alt: 'Dunkle Ecken, Lanalive, Annika Terwey, Sophie Lazari, Hilka Dirks, Zora Hünermann, ...'
  },
  {
    id: createID(),
    caption: 'Trashspotting 2',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652010912/Curation/trashspotting1/trash_dt2_jdqjy6.jpg',
    //      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779847/Curation/trashspotting2/trash_dt2_rwijer.jpg',
    tags: [all, exhibition],
    alt: 'Trashspotting, designtransfer, Annika Terwey, Sophie Lazari, Joanna Breithuber, Pia Wolf, Lea Huch...'
  },
  {
    id: createID(),
    caption: 'Trashspotting',
    imageSrc:
      // 'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779824/Curation/trashspotting1/trash_eppan3_xe8kfn.jpg',
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779824/Curation/trashspotting1/trash_eppan4_dsoq5g.jpg',
    tags: [all, exhibition],
    alt: 'Trashspotting, Eppan, Annika Terwey, Sophie Lazari, Linda Schwarz'
  }
];
