import {
  View,
  ViewStyle,
  Text,
  ImageBackground,
  ImageStyle,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  VirtualizedList,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  ColorValue,
} from 'react-native';

import { darkly } from './darkly';

export { darkly };

export const DarklyView = darkly(View);
export const DarklyKeyboardAvoidingView = darkly(KeyboardAvoidingView);
export const DarklySafeAreaView = darkly(SafeAreaView);
export const DarklyText = darkly(Text);
export const DarklyImage = darkly(Image);
export const DarklyImageBackground = darkly<
  typeof ImageBackground,
  { darkImageStyle?: ImageStyle }
>(ImageBackground, ['imageStyle']);

type ContentContainerStyle = { darkContentContainerStyle?: ViewStyle };

export const DarklyScrollView = darkly<
  typeof ScrollView,
  ContentContainerStyle
>(ScrollView, ['contentContainerStyle']);

export const DarklyFlatList = darkly<typeof FlatList, ContentContainerStyle>(
  FlatList,
  ['contentContainerStyle'],
);

export const DarklySectionList = darkly<
  typeof SectionList,
  ContentContainerStyle
>(SectionList, ['contentContainerStyle']);

export const DarklyVirtualizedList = darkly<
  typeof VirtualizedList,
  ContentContainerStyle
>(VirtualizedList, ['contentContainerStyle']);

export const DarklyTouchableHighlight = darkly<
  typeof TouchableHighlight,
  {
    darkUnderlayColor?: ColorValue;
  }
>(TouchableHighlight, [], ['underlayColor']);

export const DarklyTouchableOpacity = darkly(TouchableOpacity);

export const DarklyTouchableNativeFeedback = darkly(TouchableNativeFeedback);
