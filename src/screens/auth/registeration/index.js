import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {images} from '../../../assets/images';
import {TouchableButton} from '../../../components/atoms/button';
import {HeadingText} from '../../../components/atoms/heading';
import InputFieldContainer from '../../../components/orgnaisms/inputFieldContainer';
import {rhp} from '../../../constants/dimensions';
import {ScreenNames} from '../../../constants/strings';
import {useKeyboard} from '../../../hooks';
import {navigate} from '../../../navigationHandler/navigationRef';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';

const SignUpScreen = () => {
  const keyboardStatus = useKeyboard();
  return (
    // <View style={styles.container}>
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <HeadingText />
      <InputFieldContainer />
      <TouchableButton
        title={'Send OTP'}
        btnPropStyle={{marginTop: rhp(20)}}
        onPress={() => navigate(ScreenNames.otpScreen)}
      />
      {!keyboardStatus && (
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <FastImage source={images.cubImage} style={styles.imgStyle} />
        </View>
      )}
      {/* </View> */}
    </ImageBackground>
  );
};
export default SignUpScreen;
