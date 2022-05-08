import { v4 as createID } from 'uuid';

export const artworkDetailsItems = [
  {
    id: createID(),
    caption: 'Uncomfortable Futures',
    curation: 'Curation | Co-Management | 2021',
    gallery: [
      'https://s3-alpha-sig.figma.com/img/b9cc/2e61/ec8153f7028e786ec59ad1c4a3ee31e8?Expires=1652659200&Signature=HKCF-RZ2bFre49oYktiTg0L2Ry2XKnFzuhYPxqNbvXy9nZGyK1XK464iF2BqMZ8PkNMFby6MeBiTFzY6xaXo7HRIYvmkXU~yy-5BIJUxMS0cwN0r~KOSqwSR-MRt3pMMSDRvHrKVCBFoHU-~q2BCd~RkDRCjp9zymLWLF0gOrLQLhp1WLP7j9wZsIFLZ0rEUhCssSrkJtK~HLzGrmM3BTvzV7VaDiflHxkuVHkIhw6XitoqmmJQAzHF9kgx6Xkm12KE4D~PLGpbjcMV28vVSDpjJb5Qe0no20O0l0CFg77vF5u61Y~6F6~2GoOzToQMjU9YkVQZ9FF7qP65K9jWMWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
