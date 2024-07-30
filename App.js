import * as React from 'react';
import 'react-native-reanimated';
import 'expo-dev-client';
import HomeStack from './navigation/HomeStack';
import RouteManager from './navigation/RouteManager'
import AuthStack from './navigation/AuthStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthStack />
    </GestureHandlerRootView>
  );
}

export default App;

