import { v4 as createID } from 'uuid';

export const menuItems = [
  {
    id: createID(),
    value: 'projects',
    link: '/projects'
  },
  {
    id: createID(),
    value: 'curation',
    link: '/curation'
  },
  {
    id: createID(),
    value: 'index',
    link: '/index'
  },
  {
    id: createID(),
    value: 'about',
    link: '/about'
  }
];
