import { PureLightTheme } from './schemes/PureLightTheme.jsx';

export function themeCreator(theme) {
  return themeMap[theme];
}

const themeMap = {
  PureLightTheme
};
