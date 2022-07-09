import React, { useState } from 'react';
import {
  DarklyText,
  DarklySafeAreaView,
  DarklyScrollView,
  DarklyTouchableHighlight,
  DarklyProvider,
  DarklyStatusBar,
} from './library/main';

export default function App() {
  const [forceDark, setForceDark] = useState(false);

  return (
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
