import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ScreenNames} from '../../constants/strings';
import AlphabetsExercise from '../../screens/bottom/alphabetExercise';
import AnimalsExercise from '../../screens/bottom/animalsExercise';
import GamesScreen from '../../screens/bottom/games';
import NumbersExercise from '../../screens/bottom/numbersExercise';
import ShapesExercise from '../../screens/bottom/shapesExercise';
import KidsGameExercise from '../../screens/bottom/kidsGameExercise';

const GameStack = createNativeStackNavigator();

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
  animation: 'slide_from_right',
});

const GameNavigator = () => {
  return (
    <GameStack.Navigator initialRouteName={ScreenNames.gameScreen}>
      <GameStack.Screen
        name={ScreenNames.gameScreen}
        component={GamesScreen}
        options={navigationOptions}
      />
      <GameStack.Screen
        name={ScreenNames.alphabetExerciseScreen}
        component={AlphabetsExercise}
        options={navigationOptions}
      />
      <GameStack.Screen
        name={ScreenNames.numbersExerciseScreen}
        component={NumbersExercise}
        options={navigationOptions}
      />
      <GameStack.Screen
        name={ScreenNames.shapesExerciseScreen}
        component={ShapesExercise}
        options={navigationOptions}
      />
      <GameStack.Screen
        name={ScreenNames.animalsExerciseScreen}
        component={AnimalsExercise}
        options={navigationOptions}
      />
      <GameStack.Screen
        name={ScreenNames.kidsGameExerciseScreen}
        component={KidsGameExercise}
        options={navigationOptions}
      />
    </GameStack.Navigator>
  );
};

export default GameNavigator;
