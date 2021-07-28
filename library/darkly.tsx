import React from 'react';
import { useColorScheme } from 'react-native';
import hoistNonReactStatics from 'hoist-non-react-statics';

const getDarkKey = (key: string) =>
  `dark${key[0].toUpperCase()}${key.slice(1)}`;

const useColorSchemeHook = useColorScheme || (() => 'light');

export function darkly<T extends React.ComponentType<any>, E = {}>(
  Component: T,
  styleKeys: (keyof React.ComponentProps<T>)[] = [],
  propKeys: (keyof React.ComponentProps<T>)[] = [],
) {
  // @ts-ignore
  if (!styleKeys.includes('style')) styleKeys.push('style');
  const Darkly = React.forwardRef<
    any,
    React.ComponentProps<T> & {
      darkStyle?: React.ComponentProps<T>['style'];
      forceDark?: boolean;
      children?: React.ReactNode;
    } & E
  >((props: any, ref) => {
    const darklyProps: any = {};

    const colorScheme = useColorSchemeHook();

    const isDark =
      typeof props.forceDark === 'boolean'
        ? props.forceDark
        : colorScheme === 'dark';

    if (isDark) {
      styleKeys.forEach((key: any) => {
        const darkKey = getDarkKey(key);

        if (props[key] || props[darkKey]) {
          if (!darklyProps[key]) darklyProps[key] = [];
          darklyProps[key].push(props[key], props[darkKey]);
        }
      });

      propKeys.forEach((key: any) => {
        const darkKey = getDarkKey(key);
        if (props[darkKey]) {
          darklyProps[key] = props[darkKey];
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
