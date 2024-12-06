import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {HeadingText} from '../../../components/atoms/heading';
import {images} from '../../../assets/images';
import {navigate} from '../../../navigationHandler/navigationRef';
import {ScreenNames} from '../../../constants/strings';
import ProfilesAvatarContainer from '../../../components/molecules/profileAvatarsContainer';
import CustomTextInput from '../../../components/atoms/customTextInput';
import HorizontalNumberList from '../../../components/atoms/ageFlatList';
import {TouchableButton} from '../../../components/atoms/button';

const ProfileScreen = () => {
  return (
    //  <View style={styles.container}>
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <HeadingText />
      <ProfilesAvatarContainer />
      <Text style={styles.nameHeading}>Child Name</Text>
      <CustomTextInput
        inputText={{textAlign: 'center'}}
        style={{paddingVertical: 10}}
      />
      <Text style={styles.ageHeading}>Your age?</Text>
      <HorizontalNumberList />
      <TouchableButton
        title={'Next'}
        btnPropStyle={{marginTop: 40}}
        onPress={() => navigate(ScreenNames.interestScreen)}
      />
      {/* 
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Image source={images.cubImage} style={styles.imgStyle} />
            </View> */}
      {/* </View> */}
    </ImageBackground>
  );
};

export default ProfileScreen;
