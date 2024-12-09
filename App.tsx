import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {SoundProvider} from './src/contextAPI/soundsContext';
import {NavigationHandler} from './src/navigationHandler';
import {LoaderProvider} from './src/contextAPI/loaderProvider';
// import {store} from './src/redux/loaderSlice/store';

const App = () => {
  useEffect(() => {
    if (Platform.OS !== 'web') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <Provider store={store}> */}
      <LoaderProvider>
        <SoundProvider>
          <NavigationHandler />
        </SoundProvider>
      </LoaderProvider>
      {/* </Provider> */}
    </GestureHandlerRootView>
  );
};

export default App;
