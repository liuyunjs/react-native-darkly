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
  ImageBackgroundProps,
  ScrollViewProps,
  FlatListProps,
  SectionListProps,
  VirtualizedListProps,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableHighlightProps,
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
  ImageBackgroundProps,
  { darkImageStyle?: ImageStyle }
>(ImageBackground, ['imageStyle']);

type ContentContainerStyle = { darkContentContainerStyle?: ViewStyle };

export const DarklyScrollView = darkly<ScrollViewProps, ContentContainerStyle>(
  ScrollView,
  ['contentContainerStyle'],
);

export const DarklyFlatList = darkly<FlatListProps<any>, ContentContainerStyle>(
  FlatList,
  ['contentContainerStyle'],
);

export const DarklySectionList = darkly<
  SectionListProps<any>,
  ContentContainerStyle
>(SectionList, ['contentContainerStyle']);

export const DarklyVirtualizedList = darkly<
  VirtualizedListProps<any>,
  ContentContainerStyle
>(VirtualizedList, ['contentContainerStyle']);

export const DarklyTouchableHighlight = darkly<
  TouchableHighlightProps,
  {
    darkUnderlayColor?: ColorValue;
  }
>(TouchableHighlight, [], ['underlayColor']);

export const DarklyTouchableOpacity = darkly(TouchableOpacity);

export const DarklyTouchableNativeFeedback = darkly(TouchableNativeFeedback);
