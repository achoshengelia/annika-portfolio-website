import { v4 as createID } from 'uuid';

export const artworkDetailsItems = [
  {
    id: createID(),
    caption: 'Uncomfortable Futures',
    curation: 'Curation | Co-Management | 2021',
    gallery: [
      'https://images.unsplash.com/photo-1652007975933-56cb1e2c2728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1651984910997-382d05ecb28d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1651991653827-635844992972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
    ],
    moreInfo:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta facere eveniet repellendus quo eaque! Beatae itaque cumque quisquam magni assumenda voluptatibus. Est, accusantium minus repellendus tempora nam deserunt sapiente vel!'
  }
];

export const getArtworkDetails = caption => {
  return artworkDetailsItems.find(item => item.caption === caption);
};
