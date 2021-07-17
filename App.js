import React from 'react';
import {
  DarklyText,
  DarklySafeAreaView,
  DarklyScrollView,
} from './library/main';

export default function App() {
  return (
    <DarklyScrollView
      style={{ flex: 1, backgroundColor: '#fafafa', paddingTop: 20 }}
      contentContainerStyle={{ backgroundColor: '#fafafa', flex: 1 }}
      darkContentContainerStyle={{ backgroundColor: '#000' }}>
      <DarklySafeAreaView>
        <DarklyText
          style={{ fontSize: 20, color: '#333' }}
          darkStyle={{ color: '#ddd' }}>
          DarklyText
        </DarklyText>
      </DarklySafeAreaView>
    </DarklyScrollView>
  );
}
