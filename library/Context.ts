import { createContext } from 'react';
import { Appearance } from 'react-native';

export const DarklyContext = createContext(
  Appearance?.getColorScheme?.() === 'dark' || false,
);
