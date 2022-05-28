import {
  View,
  Text,
  ImageBackground,
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
} from 'react-native';

import { darkly } from './darkly';

export { darkly };

const STYLE = 'style';
const CONTENT_CONTAINER_STYLE = 'contentContainerStyle';

export const DarklyView = darkly(View, STYLE);
export const DarklyKeyboardAvoidingView = darkly(KeyboardAvoidingView, STYLE);
export const DarklySafeAreaView = darkly(SafeAreaView, STYLE);
export const DarklyText = darkly(Text, STYLE);
export const DarklyImage = darkly(Image, STYLE);
export const DarklyImageBackground = darkly(
  ImageBackground,
  STYLE,
  'imageStyle',
);

export const DarklyScrollView = darkly(
  ScrollView,
  STYLE,
  CONTENT_CONTAINER_STYLE,
);

export const DarklyFlatList = darkly(FlatList, STYLE, CONTENT_CONTAINER_STYLE);

export const DarklySectionList = darkly(
  SectionList,
  STYLE,
  CONTENT_CONTAINER_STYLE,
);

export const DarklyVirtualizedList = darkly(
  VirtualizedList,
  STYLE,
  CONTENT_CONTAINER_STYLE,
);

export const DarklyTouchableHighlight = darkly(
  TouchableHighlight,
  STYLE,
  'underlayColor',
);

export const DarklyTouchableOpacity = darkly(TouchableOpacity, STYLE);

export const DarklyTouchableNativeFeedback = darkly(
  TouchableNativeFeedback,
  STYLE,
);
