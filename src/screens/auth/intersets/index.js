import React from 'react';
import {ImageBackground, Text} from 'react-native';
import {images} from '../../../assets/images';
import {TouchableButton} from '../../../components/atoms/button';
import {HeadingText} from '../../../components/atoms/heading';
import InterestsSelection from '../../../components/molecules/selectedInterests';
import {ScreenNames, Strings} from '../../../constants/strings';
import {navigate} from '../../../navigationHandler/navigationRef';
import {styles} from './styles';

const KidsInterestSelectionScreen = () => {
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <HeadingText />
      <Text style={styles.nameHeading}>{Strings.chooseKidsInterests}</Text>
      <InterestsSelection />
      <TouchableButton
        title={'Complete'}
        btnPropStyle={{marginTop: 20}}
        onPress={() =>
          navigate('BottomStack', {screen: ScreenNames.homeScreen})
        }
      />
    </ImageBackground>
  );
};

export default KidsInterestSelectionScreen;
