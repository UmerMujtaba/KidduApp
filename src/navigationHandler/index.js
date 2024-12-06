import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigationRef';
import Auth from './authStack';
import {ScreenNames} from '../constants/strings';
import Bottom from './bottomStack';
import AlphabetsExerciseMain from '../screens/bottom/alphabetExerciseMain';
import ShapesExercise from '../screens/bottom/shapesExercise';
import NumbersExercise from '../screens/bottom/numbersExercise';

const NavigationStack = createNativeStackNavigator();

export const NavigationHandler = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <NavigationStack.Navigator initialRouteName={ScreenNames.AuthStack}> */}
      <NavigationStack.Navigator initialRouteName={ScreenNames.BottomStack}>
        <NavigationStack.Screen
          name={ScreenNames.AuthStack}
          component={Auth}
          options={{headerShown: false}}
        />
        <NavigationStack.Screen
          name={ScreenNames.BottomStack}
          component={Bottom}
          options={{headerShown: false}}
        />
        <NavigationStack.Screen
          name={ScreenNames.alphabetExerciseMainScreen}
          component={AlphabetsExerciseMain}
          options={{headerShown: false}}
        />
        <NavigationStack.Screen
          name={ScreenNames.shapesExerciseScreen}
          component={ShapesExercise}
          options={{headerShown: false}}
        />
        <NavigationStack.Screen
          name={ScreenNames.numbersExerciseScreen}
          component={NumbersExercise}
          options={{headerShown: false}}
        />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};
