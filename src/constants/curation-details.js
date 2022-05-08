import { v4 as createID } from 'uuid';

export const curationDetailsItems = [
  {
    id: createID(),
    caption: 'Extrasober',
    curation: 'Curation | Co-Management | 2020',
    gallery: [
      'https://s3-alpha-sig.figma.com/img/65f5/d5eb/ae2f7457601fa067c1221f2d6143a69b?Expires=1652659200&Signature=CGLKHdrQjPEcWpsbWFEMBfOlqEeG84hoHyebRMuijQZyiYaUdDfhfAb5-BKVzHdX5Wkn3jzLzmK~qwER9L-ZY73YDEaRiahSHuIXsigPuPPdgObaBET6LU6HE-GRO6ssLoHj9rFIK-awWV2PTNCGzgeYJT-HUJr4lWnV90gI6sihsT3~06XFHihm81uKrJnegd60MzEfzDDAYyD2NeXpkBfuZxd1-98N1zp18hdhlYLauyaJkLE6qRy75EPfLpjTHiqeXVMpiV5zYWlx6s825azMqYI3hEpToPQITiC8ixSR4-1lXv5ua9fNE2YIMjh5FcURBdFkXeirPISt4zI6hA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://images.unsplash.com/photo-1651984910997-382d05ecb28d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1651991653827-635844992972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
    ],
    moreInfo:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta facere eveniet repellendus quo eaque! Beatae itaque cumque quisquam magni assumenda voluptatibus. Est, accusantium minus repellendus tempora nam deserunt sapiente vel!'
  }
];

export const getCurationDetails = caption => {
  return curationDetailsItems.find(item => item.caption === caption);
};
