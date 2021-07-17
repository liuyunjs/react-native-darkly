import React from 'react';
import { useColorScheme } from 'react-native';
import hoistNonReactStatics from 'hoist-non-react-statics';

export function darkly<T extends {}, E = {}>(
  Component: React.ComponentType<T>,
  ...styleKeys: string[]
) {
  if (!styleKeys.includes('style')) {
    styleKeys.push('style');
  }
  const Darkly = React.forwardRef<
    any,
    // @ts-ignore
    T & { darkStyle?: T['style']; forceDark?: boolean } & E
  >((props: any, ref) => {
    const darklyProps: any = {};

    const colorScheme = useColorScheme();

    const isDark =
      typeof props.forceDark === 'boolean'
        ? props.forceDark
        : colorScheme === 'dark';

    if (isDark) {
      styleKeys.forEach((key) => {
        const darkKey = `dark${key[0].toUpperCase()}${key.slice(1)}`;

        if (props[key] || props[darkKey]) {
          if (!darklyProps[key]) darklyProps[key] = [];
          darklyProps[key].push(props[key], props[darkKey]);
        }
      });
    }

    return <Component {...props} {...darklyProps} ref={ref} />;
  });

  Darkly.displayName = `darkly(${
    Component.displayName || Component.name || 'Component'
  })`;

  return hoistNonReactStatics(Darkly, Component);
}
