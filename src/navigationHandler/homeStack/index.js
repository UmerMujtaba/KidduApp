import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../../constants/strings';
import AlphabetsScreen from '../../screens/bottom/alphabets';
import NumbersScreen from '../../screens/bottom/numbers';
import ShapesScreen from '../../screens/bottom/shapes';
import AnimalsScreen from '../../screens/bottom/animals';
import KidsGamesScreen from '../../screens/bottom/kidsGame';
import HomeScreen from '../../screens/bottom/home';

const HomeStack = createNativeStackNavigator();

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
  animation: 'slide_from_right',
});

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={ScreenNames.homeScreen}>
      <HomeStack.Screen
        name={ScreenNames.homeScreen}
        component={HomeScreen}
        options={navigationOptions}
      />
      <HomeStack.Screen
        name={ScreenNames.alphabetsScreen}
        component={AlphabetsScreen}
        options={navigationOptions}
      />
      <HomeStack.Screen
        name={ScreenNames.numbersScreen}
        component={NumbersScreen}
        options={navigationOptions}
      />
      <HomeStack.Screen
        name={ScreenNames.shapesScreen}
        component={ShapesScreen}
        options={navigationOptions}
      />
      <HomeStack.Screen
        name={ScreenNames.animalsScreen}
        component={AnimalsScreen}
        options={navigationOptions}
      />
      <HomeStack.Screen
        name={ScreenNames.kidsGamesScreen}
        component={KidsGamesScreen}
        options={navigationOptions}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
