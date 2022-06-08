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
    alt: 'Extrasober.online website on a mobile screen'
  },
  {
    id: createID(),
    caption: 'Dunkle Ecken',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779279/Curation/dunkleecken/dunkleecken6_pe4xhm.jpg',
    tags: [all, onlineExhibition, exhibition],
    alt: 'A black and white poster hangs next to a window showing a video'
  },
  {
    id: createID(),
    caption: 'Trashspotting 2',
    imageSrc:
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1652010912/Curation/trashspotting1/trash_dt2_jdqjy6.jpg',
    //      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779847/Curation/trashspotting2/trash_dt2_rwijer.jpg',
    tags: [all, exhibition],
    alt: 'Showcase exhibition showing exhibits on white pedestals'
  },
  {
    id: createID(),
    caption: 'Trashspotting',
    imageSrc:
      // 'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779824/Curation/trashspotting1/trash_eppan3_xe8kfn.jpg',
      'https://res.cloudinary.com/dojsjcecs/image/upload/v1651779824/Curation/trashspotting1/trash_eppan4_dsoq5g.jpg',
    tags: [all, exhibition],
    alt: 'Exhibition visitors reading a book about plastic found on the beach'
  }
];
