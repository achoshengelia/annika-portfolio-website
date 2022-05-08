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
    caption: 'Body Dynamics',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/8175/43fc/9c0a8df2253c6f52bab6a4c6d279d483?Expires=1650844800&Signature=hKN0bqzedqD-T8bNRBIUQ0wjh3dUeab055pzRB0RWMrAd5y2JFxD5n6bI--TwC9b7UlSAEkvsrxsUGmwk1EeVPrgW~SUDXNJrs5H6ed8eLyGV~eSwDYulBVE4Q6oKHAcEDW0g3HK3BbHv3nz6Tz1TKVi2VjljF~psebVCVIio8bxvCKoU8Zpjv6iPacc~nIH2B4aMa12Wf7OlZCSpgofEH9AAWSOLlNwcC5rHzH4~K3Tqq9wsS3pvNE5ERT6NLfa388UyF1coKhdgEiLh9H5AZgpKxMEqaHPSClyOJr0izMxjyN-NHPpCT-60sNOo803~WS~XX8XM6VpNaKhH6GoSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    tags: [all, photo, film]
  },
  {
    id: createID(),
    caption: 'Uncomfortable Future',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/7ee2/6244/5a05a554d6150f6b371f6a8f51d5872b?Expires=1650844800&Signature=bPyFbwf5DCusdlqGfMWRa6anRuv6GTrDHoWRaRRmBcwrnrzSu9KiXVwUo5kJ30kq4CRl9nYO8V5-LxF3Mm8LwJ-BafA~eAg-wxv0Iek626MLL7QkZceyoJMbpHMY-aAYlhQVBr6qF3cKLVeNrTans96wFY5KaGIhnRGZdQD~-oTkm0HZVTBvxpy7Q-tlu3YD-68hYzS7JSI2onW79PQPcSmnl0RGbDbiqoAeo3~hCxJP6CdTIhCmx87~IQvzfH-2dfreXp9Nl0dK1vlcF3YgSHKwOBpBjkqOJDtoeImcFufQLudknHmJvfnuh3UpJnwOeHGti8rKBC7JLn7WqYhyuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    tags: [all, productDesign, designFiction]
  },
  {
    id: createID(),
    caption: 'Body Dynamics',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/8175/43fc/9c0a8df2253c6f52bab6a4c6d279d483?Expires=1650844800&Signature=hKN0bqzedqD-T8bNRBIUQ0wjh3dUeab055pzRB0RWMrAd5y2JFxD5n6bI--TwC9b7UlSAEkvsrxsUGmwk1EeVPrgW~SUDXNJrs5H6ed8eLyGV~eSwDYulBVE4Q6oKHAcEDW0g3HK3BbHv3nz6Tz1TKVi2VjljF~psebVCVIio8bxvCKoU8Zpjv6iPacc~nIH2B4aMa12Wf7OlZCSpgofEH9AAWSOLlNwcC5rHzH4~K3Tqq9wsS3pvNE5ERT6NLfa388UyF1coKhdgEiLh9H5AZgpKxMEqaHPSClyOJr0izMxjyN-NHPpCT-60sNOo803~WS~XX8XM6VpNaKhH6GoSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    tags: [all, photo, film]
  },
  {
    id: createID(),
    caption: 'Uncomfortable Future',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/7ee2/6244/5a05a554d6150f6b371f6a8f51d5872b?Expires=1650844800&Signature=bPyFbwf5DCusdlqGfMWRa6anRuv6GTrDHoWRaRRmBcwrnrzSu9KiXVwUo5kJ30kq4CRl9nYO8V5-LxF3Mm8LwJ-BafA~eAg-wxv0Iek626MLL7QkZceyoJMbpHMY-aAYlhQVBr6qF3cKLVeNrTans96wFY5KaGIhnRGZdQD~-oTkm0HZVTBvxpy7Q-tlu3YD-68hYzS7JSI2onW79PQPcSmnl0RGbDbiqoAeo3~hCxJP6CdTIhCmx87~IQvzfH-2dfreXp9Nl0dK1vlcF3YgSHKwOBpBjkqOJDtoeImcFufQLudknHmJvfnuh3UpJnwOeHGti8rKBC7JLn7WqYhyuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    tags: [all, productDesign, designFiction]
  },
  {
    id: createID(),
    caption: 'Body Dynamics',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/8175/43fc/9c0a8df2253c6f52bab6a4c6d279d483?Expires=1650844800&Signature=hKN0bqzedqD-T8bNRBIUQ0wjh3dUeab055pzRB0RWMrAd5y2JFxD5n6bI--TwC9b7UlSAEkvsrxsUGmwk1EeVPrgW~SUDXNJrs5H6ed8eLyGV~eSwDYulBVE4Q6oKHAcEDW0g3HK3BbHv3nz6Tz1TKVi2VjljF~psebVCVIio8bxvCKoU8Zpjv6iPacc~nIH2B4aMa12Wf7OlZCSpgofEH9AAWSOLlNwcC5rHzH4~K3Tqq9wsS3pvNE5ERT6NLfa388UyF1coKhdgEiLh9H5AZgpKxMEqaHPSClyOJr0izMxjyN-NHPpCT-60sNOo803~WS~XX8XM6VpNaKhH6GoSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    tags: [all, photo, film]
  },
  {
    id: createID(),
    caption: 'Uncomfortable Future',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/7ee2/6244/5a05a554d6150f6b371f6a8f51d5872b?Expires=1650844800&Signature=bPyFbwf5DCusdlqGfMWRa6anRuv6GTrDHoWRaRRmBcwrnrzSu9KiXVwUo5kJ30kq4CRl9nYO8V5-LxF3Mm8LwJ-BafA~eAg-wxv0Iek626MLL7QkZceyoJMbpHMY-aAYlhQVBr6qF3cKLVeNrTans96wFY5KaGIhnRGZdQD~-oTkm0HZVTBvxpy7Q-tlu3YD-68hYzS7JSI2onW79PQPcSmnl0RGbDbiqoAeo3~hCxJP6CdTIhCmx87~IQvzfH-2dfreXp9Nl0dK1vlcF3YgSHKwOBpBjkqOJDtoeImcFufQLudknHmJvfnuh3UpJnwOeHGti8rKBC7JLn7WqYhyuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    tags: [all, productDesign, designFiction]
  }
];

export const searchParam = 'filter';
