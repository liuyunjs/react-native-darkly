import React, { useContext, ComponentType, forwardRef } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { DarklyContext } from './Context';

const getDarkKey = (key: string) => `dark_${key}`;

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
  Component: ComponentType<Props>,
  ...propKeys: K
) {
  const Darkly = forwardRef<any, Props & DarklyProps & AdapterProps<Props, K>>(
    (props: any, ref) => {
      const darklyProps: any = {};
      const darkContext = useContext(DarklyContext);

      const isDark =
        typeof props.forceDark === 'boolean' ? props.forceDark : darkContext;

      if (isDark) {
        propKeys.forEach((key: any) => {
          const darkKey = getDarkKey(key);

          if (
            // 检测是否以 style 结尾，大小写不论
            /style$/i.test(key) &&
            // 判断是对象，这里是为了排除 StatusBar 中的 barStyle，又以免某些组件 接收 barStyle 这个样式 prop
            typeof props[key] !== 'string' &&
            typeof props[darkKey] !== 'string'
          ) {
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
    },
  );

  Darkly.displayName = `Darkly${
    Component.displayName || Component.name || 'Component'
  }`;

  return hoistNonReactStatics(Darkly, Component);
}
