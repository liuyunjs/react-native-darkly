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
  ViewProps,
  TextProps,
  ImageProps,
  ImageBackgroundProps,
  ScrollViewProps,
  FlatListProps,
  SectionListProps,
  VirtualizedListProps,
  KeyboardAvoidingViewProps,
} from 'react-native';

import { darkly } from './darkly';

export { darkly };

export const DarklyView = darkly<ViewProps>(View);
export const DarklyKeyboardAvoidingView =
  darkly<KeyboardAvoidingViewProps>(KeyboardAvoidingView);
export const DarklySafeAreaView = darkly<ViewProps>(SafeAreaView);
export const DarklyText = darkly<TextProps>(Text);
export const DarklyImage = darkly<ImageProps>(Image);
export const DarklyImageBackground = darkly<
  ImageBackgroundProps,
  { darkImageStyle?: ImageStyle }
>(ImageBackground, 'imageStyle');

type ContentContainerStyle = { darkContentContainerStyle?: ViewStyle };

export const DarklyScrollView = darkly<ScrollViewProps, ContentContainerStyle>(
  ScrollView,
  'contentContainerStyle',
);

export const DarklyFlatList = darkly<FlatListProps<any>, ContentContainerStyle>(
  FlatList,
  'contentContainerStyle',
);

export const DarklySectionList = darkly<
  SectionListProps<any>,
  ContentContainerStyle
>(SectionList, 'contentContainerStyle');

export const DarklyVirtualizedList = darkly<
  VirtualizedListProps<any>,
  ContentContainerStyle
>(VirtualizedList, 'contentContainerStyle');
