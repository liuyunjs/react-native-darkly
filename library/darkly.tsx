import React from 'react';
import { useColorScheme } from 'react-native';
import hoistNonReactStatics from 'hoist-non-react-statics';

const getDarkKey = (key: string) => `dark_${key}`;

const isStyleKey = (key: string) => /style$/i.test(key);

export type DarklyProps = {
  forceDark?: boolean;
  children?: React.ReactNode;
};

export type AdapterProps<T extends any, U extends (keyof T)[]> = {
  [K in U[number] as K extends keyof T
    ? K extends string
      ? `dark_${K}`
      : never
    : never]?: T[K];
};

export function darkly<Props extends any, K extends (keyof Props)[]>(
  Component: React.ComponentType<Props>,
  ...propKeys: K
) {
  const Darkly = React.forwardRef<
    any,
    Props & DarklyProps & AdapterProps<Props, K>
  >((props: any, ref) => {
    const darklyProps: any = {};

    const colorScheme = useColorScheme?.();

    const isDark =
      typeof props.forceDark === 'boolean'
        ? props.forceDark
        : colorScheme === 'dark';

    if (isDark) {
      propKeys.forEach((key: any) => {
        const darkKey = getDarkKey(key);

        if (isStyleKey(key)) {
          if (props[key] || props[darkKey]) {
            if (!darklyProps[key]) {
              darklyProps[key] = [];
            }
            darklyProps[key].push(props[key], props[darkKey]);
          }
        } else {
          if (props[darkKey]) {
            darklyProps[key] = props[darkKey];
          }
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
