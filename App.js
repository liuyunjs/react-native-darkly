import React from 'react';
import {
  DarklyText,
  DarklySafeAreaView,
  DarklyScrollView,
  DarklyTouchableHighlight,
} from './library/main';

export default function App() {
  return (
    <DarklyScrollView
      style={{ flex: 1, backgroundColor: '#fafafa', paddingTop: 44 }}
      contentContainerStyle={{ backgroundColor: '#fafafa', flex: 1 }}
      darkContentContainerStyle={{ backgroundColor: '#000' }}>
      <DarklyTouchableHighlight
        onPress={console.log}
        darkUnderlayColor="#eee"
        style={{ backgroundColor: '#000' }}
        darkStyle={{ backgroundColor: '#fff' }}
        underlayColor="#000">
        <DarklyText
          style={{ fontSize: 20, color: '#333' }}
          darkStyle={{ color: '#ddd' }}>
          DarklyText
        </DarklyText>
      </DarklyTouchableHighlight>
    </DarklyScrollView>
  );
}
