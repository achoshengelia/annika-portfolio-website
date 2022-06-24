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
      'https://f004.backblazeb2.com/file/annika-portfolio-public/curation/extrasober/Extrasober5.jpg',
    tags: [all, onlineExhibition],
    alt: 'Extrasober, virtual art exhibition about drinking culture, Forum Präventions, Annika Terwey, Sophie Lazari, Vinzenz Aubry, Robyn Steffen, ... '
  },
  {
    id: createID(),
    caption: 'Dunkle Ecken',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/curation/dunkleecken/dunkleecken6.jpg',
    tags: [all, onlineExhibition, exhibition],
    alt: 'Dunkle Ecken, Lanalive, Annika Terwey, Sophie Lazari, Hilka Dirks, Zora Hünermann, ...'
  },
  {
    id: createID(),
    caption: 'Trashspotting 2',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/curation/trashspotting2/trash_dt2.jpg',
    tags: [all, exhibition],
    alt: 'Trashspotting, designtransfer, Annika Terwey, Sophie Lazari, Joanna Breithuber, Pia Wolf, Lea Huch...'
  },
  {
    id: createID(),
    caption: 'Trashspotting',
    imageSrc:
      'https://f004.backblazeb2.com/file/annika-portfolio-public/curation/trashspotting1/trash_eppan4.JPG',
    tags: [all, exhibition],
    alt: 'Trashspotting, Eppan, Annika Terwey, Sophie Lazari, Linda Schwarz'
  }
];
