import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../assets/images';
import {colors} from '../../constants/colors';
import {rfs, rhp, rwp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
import ProfileRoundedAvatar from '../atoms/profileAvatar';

const ProfilesAvatarContainer = ({onGenderSelect}) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarSelect = avatar => {
    setSelectedAvatar(avatar);
    onGenderSelect(avatar);

    console.log('🚀 ~ handleAvatarSelect ~ avatar:', avatar);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Creating profile for?</Text>
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={() => handleAvatarSelect('girl')}>
          <ProfileRoundedAvatar
            imageSource={images.girlAvatar}
            isSelected={selectedAvatar === 'girl'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAvatarSelect('boy')}>
          <ProfileRoundedAvatar
            imageSource={images.boyAvatar}
            isSelected={selectedAvatar === 'boy'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: rhp(30),
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: rwp(20),
  },
  heading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(20),
    color: colors.white,
    textAlign: 'center',
    marginBottom: rhp(40),
  },
});

export default ProfilesAvatarContainer;
