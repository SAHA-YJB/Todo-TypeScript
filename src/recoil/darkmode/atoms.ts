import { atom } from 'recoil';

export const darkModeState = atom<boolean>({
  key: 'darkModeState',
  default: JSON.parse(localStorage.getItem('darkMode') || 'false'),
});