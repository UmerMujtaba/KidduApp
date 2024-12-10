import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ScreenNames} from '../../constants/strings';
import GamesScreen from '../../screens/bottom/games';
import AlphabetsExerciseMain from '../../screens/bottom/exerciseScreens/alphabetExerciseMain';
import KidsGameExercise from '../../screens/bottom/exerciseScreens/kidsGameExercise';

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
    </GameStack.Navigator>
  );
};

export default GameNavigator;
