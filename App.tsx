import React from 'react';
import {
  DarklyText,
  DarklySafeAreaView,
  DarklyScrollView,
  DarklyTouchableHighlight,
} from './library/main';

export default function App() {
  return (
    <DarklySafeAreaView style={{ flex: 1 }}>
      <DarklyScrollView
        // style={{ flex: 1, backgroundColor: '#fafafa' }}
        // dark_style={{ backgroundColor: '#000' }}
        contentContainerStyle={{ backgroundColor: '#fafafa', flex: 1 }}
        dark_contentContainerStyle={{ backgroundColor: '#000' }}>
        <DarklyTouchableHighlight
          onPress={(e) => console.log(e.nativeEvent)}
          style={{ height: 50 }}
          dark_underlayColor="#eee"
          underlayColor="#000">
          <DarklyText
            style={{ fontSize: 20, color: '#333' }}
            dark_style={{ color: '#fff' }}>
            DarklyText
          </DarklyText>
        </DarklyTouchableHighlight>
      </DarklyScrollView>
    </DarklySafeAreaView>
  );
}
