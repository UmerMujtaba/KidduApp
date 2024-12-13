import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {hp, rhp, rwp, wp} from '../../constants/dimensions';
import {colors} from '../../constants/colors';
import FastImage from 'react-native-fast-image';

const ProfileRoundedAvatar = ({
  imageSource,
  isSelected,
  mainContainer,
  innerContainer,
}) => {
  return (
    <View style={[styles.container, mainContainer]}>
      <View
        style={[
          styles.container,
          styles.insideContainer,
          innerContainer,
          {
            borderColor: isSelected ? colors.darkOrange : 'transparent', // Change border color when selected
            borderWidth: isSelected ? 3 : 0, // Add border when selected
          },
        ]}>
        <FastImage source={imageSource} style={styles.img} />
        {isSelected && (
          <View style={styles.tickContainer}>
            <View style={styles.tick}>
              <Text style={styles.tickText}>✔</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: rwp(100),
    width: rwp(100),
    borderRadius: rwp(50),
    backgroundColor: colors.blackishOrange,
  },
  img: {
    resizeMode: 'contain',
    height: hp(8),
    width: wp(15),
    alignSelf: 'center',
  },
  tickContainer: {
    position: 'absolute',
    bottom: -20,
    alignSelf: 'center',
  },
  tick: {
    backgroundColor: colors.headingColor,
    height: rwp(30),
    width: rwp(30),
    borderRadius: rwp(15),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 8,
  },
  insideContainer: {
    height: rhp(97),
    backgroundColor: colors.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  tickText: {
    fontSize: rwp(16),
    textAlign: 'center',
    color: colors.white, // Set tick color
  },
});
export default ProfileRoundedAvatar;
