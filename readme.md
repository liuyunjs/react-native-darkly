# rn-darkly

对 react-native 组件进行暗黑模式封装

1. 支持 useColorScheme api 自动切换为暗黑模式，在不支持此 api 的版本降级为非暗黑模式，但依旧可以手动设置强制暗黑模式/非暗黑模式
2. 支持设置暗黑模式样式
3. 支持强制暗黑模式/非暗黑模式
4. 支持配置全局强制暗黑模式/非暗黑模式

## install

### npm
```shell
npm install rn-darkly --save
```
### yarn
```shell
yarn add rn-darkly
```

## 示例
```typescript jsx
import React, { useState } from 'react';
import {
  DarklyText,
  DarklySafeAreaView,
  DarklyScrollView,
  DarklyTouchableHighlight,
  DarklyProvider,
  DarklyStatusBar,
} from 'rn-darkly';

export default function App() {
  const [forceDark, setForceDark] = useState(false);

  return (
    // 外层包裹 DarklyProvider
    <DarklyProvider forceDark={forceDark}>
      <DarklyStatusBar barStyle="dark-content" dark_barStyle="light-content" />
      <DarklyScrollView
        contentContainerStyle={{ backgroundColor: '#fafafa', flex: 1 }}
        dark_contentContainerStyle={{ backgroundColor: '#000' }}>
        <DarklySafeAreaView>
          <DarklyTouchableHighlight
            onPress={() => setForceDark(!forceDark)}
            style={{ height: 50 }}
            dark_underlayColor="#eee"
            underlayColor="#000">
            <DarklyText
              style={{ fontSize: 20, color: '#333' }}
              dark_style={{ color: '#fff' }}>
              DarklyText
            </DarklyText>
          </DarklyTouchableHighlight>
        </DarklySafeAreaView>
      </DarklyScrollView>
    </DarklyProvider>
  );
}
```

## darkly
*高阶组件，使一个普通组件支持暗黑模式*
### 示例
```typescript jsx
// 第一个参数就是要支持暗黑模式的组件
// 是否参数就是这个组件要支持暗黑模式的属性的key
// 如果是以style结尾(barStyle除外，StatusBar的barStyle不是样式)，会被认为是样式，其余就任务是普通属性
// 样式会以数组形式往下传递
// 例如默认情况下，我们设置的 style 是 {width: 100, backgroundColor: '#fff'} dark_style 是 {backgroundColor: '#000'}
// 这时实际传入ScrollView的style会是 [{width: 100, backgroundColor: '#fff'},{backgroundColor: '#000'}]
// 如果不是以style结尾，就会被替换掉
const DarklyScrollView = darkly(ScrollView, 'style', 'contentContainerStyle');
```

## Props

### DarklyProvider

| 名称                    |          默认值          |                                      类型                                       | 描述                                                         |
| ----------------------- | :----------------------: | :-----------------------------------------------------------------------------: | :----------------------------------------------------------- |
| forceDark                 |           -           |                                     boolean                                     | 强制设置全局暗黑模式/非暗黑模式                                               |
| children                |            -             |                               React.ReactNode                                | 要展示的组件                                                 |

---



### DarklyComponent 
*例如 DarklyScrollView*

| 名称                    |          默认值          |                                      类型                                       | 描述                                                         |
| ----------------------- | :----------------------: | :-----------------------------------------------------------------------------: | :----------------------------------------------------------- |
| forceDark                 |           -           |                                     boolean                                     | 强制设置暗黑模式/非暗黑模式                                               |
| dark_style                |            -             |                               StyleProp<ViewStyle>                                | 暗黑模式样式                                               |
| dark_contentContainerStyle                |            -             |                               StyleProp<ViewStyle>                                | 暗黑模式样式                                               |


*例如 DarklyView*
