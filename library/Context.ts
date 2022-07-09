import { createContext } from 'react';
import { Appearance } from 'react-native';

export const DarklyContext = createContext(
  typeof Appearance !== 'undefined'
    ? Appearance.getColorScheme?.() === 'dark'
    : false,
);
