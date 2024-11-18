import React, { useEffect } from 'react';
import { Platform, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationHandler } from './src/navigationHandler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const App = () => {
  useEffect(() => {
    if (Platform.OS !== 'web') {
      SplashScreen.hide();
    }
  }, []);
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationHandler />
    </GestureHandlerRootView>
  );
}

export default App;