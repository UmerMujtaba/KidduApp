import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {SoundProvider} from './src/context/soundsContext';
import {NavigationHandler} from './src/navigationHandler';

const App = () => {
  useEffect(() => {
    if (Platform.OS !== 'web') {
      SplashScreen.hide();
    }
  }, []);
  return (
    // <SoundProvider>
    <GestureHandlerRootView style={{flex: 1}}>
      <SoundProvider>
        <NavigationHandler />
      </SoundProvider>
    </GestureHandlerRootView>
    // </SoundProvider>
  );
};

export default App;
