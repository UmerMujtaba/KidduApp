import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {ImageBackground, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {images} from '../../../assets/images';
import HorizontalNumberList from '../../../components/atoms/ageFlatList';
import {TouchableButton} from '../../../components/atoms/button';
import CustomTextInput from '../../../components/atoms/customTextInput';
import {HeadingText} from '../../../components/atoms/heading';
import ProfilesAvatarContainer from '../../../components/molecules/profileAvatarsContainer';
import {ScreenNames} from '../../../constants/strings';
import {
  setAge,
  setGender,
  setUsername,
} from '../../../redux/slices/userDataSlice';
import {styles} from './styles';

const ProfileScreen = () => {
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {username, gender, age} = useSelector(state => state.userReducer);
  console.log(
    '🚀 ~ ProfileScreen ~ username, gender, age:',
    username,
    gender,
    age,
  );

  const secondInputRef = useRef();

  const handleUsernameChange = text => {
    dispatch(setUsername(text));
    setUsernameErrorMessage('');
    setErrorMessage('');
  };

  const validateUsername = () => {
    if (username.trim().length < 3) {
      setUsernameErrorMessage('Username must be at least 3 characters');
      return false;
    }
    return true;
  };

  const handleNextPress = () => {
    if (validateUsername() && gender && age) {
      navigation.navigate(ScreenNames.interestScreen);
      const item = {username: username, gender: gender, age: age};
      console.log('🚀 ~ ProfileScreen ~ item:', item);
    } else {
      setErrorMessage('Please fill in all the details');
    }
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <HeadingText />
      <ProfilesAvatarContainer
        onGenderSelect={selectedGender => dispatch(setGender(selectedGender))}
      />
      <Text style={styles.nameHeading}>Child Name</Text>
      <CustomTextInput
        inputText={[
          styles.inputFont,
          usernameErrorMessage && styles.errorBorder,
        ]}
        style={styles.inputFieldStyle(usernameErrorMessage)}
        returnKeyType="next"
        onSubmitEditing={() =>
          secondInputRef.current && secondInputRef.current.focus()
        }
        value={username}
        onChangeText={handleUsernameChange}
      />
      {usernameErrorMessage && (
        <Text style={styles.errorMessage}>{usernameErrorMessage}</Text>
      )}

      <Text style={styles.ageHeading}>Your age?</Text>
      <HorizontalNumberList
        selectedNumber={age}
        setSelectedNumber={selectedAge => dispatch(setAge(selectedAge))}
      />
      {/* {errorMessage && ToastAndroid.show(errorMessage, ToastAndroid.LONG)} */}
      <TouchableButton
        title="Next"
        btnPropStyle={{marginTop: 50}}
        onPress={handleNextPress}
      />
    </ImageBackground>
  );
};

export default ProfileScreen;
