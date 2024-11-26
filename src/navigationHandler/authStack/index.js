import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../../constants/strings';
import onBoardingScreen from '../../screens/auth/onBoarding';
import SignUpScreen from '../../screens/auth/registeration';
import OtPScreen from '../../screens/auth/otp';
import ProfileScreen from '../../screens/auth/profile';
import KidsInterestSelectionScreen from '../../screens/auth/intersets';

const AuthStack = createNativeStackNavigator();

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
  animation: 'slide_from_right',
});

const Auth = () => {
  return (
    <AuthStack.Navigator initialRouteName={ScreenNames.BoardingScreen}>
      <AuthStack.Screen
        name={ScreenNames.BoardingScreen}
        component={onBoardingScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.registerationScreen}
        component={SignUpScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.otpScreen}
        component={OtPScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.profile}
        component={ProfileScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.interestScreen}
        component={KidsInterestSelectionScreen}
        options={navigationOptions}
      />
    </AuthStack.Navigator>
  );
};

export default Auth;
