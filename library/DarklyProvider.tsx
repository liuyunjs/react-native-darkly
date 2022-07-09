import React, { FC, PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import { DarklyContext } from './Context';

export const DarklyProvider: FC<
  PropsWithChildren<{
    forceDark?: boolean;
  }>
> = ({ children, forceDark }) => {
  const colorScheme = useColorScheme?.() || 'light';
  let isDark = colorScheme === 'dark';
  if (typeof forceDark === 'boolean') {
    isDark = forceDark;
  }

  return (
    <DarklyContext.Provider value={isDark}>{children}</DarklyContext.Provider>
  );
};
