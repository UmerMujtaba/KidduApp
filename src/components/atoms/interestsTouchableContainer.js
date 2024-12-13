import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {rfs, rhp, rwp} from '../../constants/dimensions';
import {images} from '../../assets/images';
import fonts from '../../constants/fonts';
import {colors} from '../../constants/colors';
import FastImage from 'react-native-fast-image';

const InterestsTouchableComponent = ({
  imageSource,
  title,
  onPress,
  isSelected,
}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <TouchableOpacity
        style={[
          styles.container,
          {
            height: rhp(135),
            backgroundColor: colors.white,
            borderTopColor: 'orange',
            borderLeftColor: 'orange',
            borderRightColor: 'orange',
            borderBottomColor: 'white',
            justifyContent: 'center',
          },
        ]}
        activeOpacity={0.5}
        onPress={onPress}>
        {isSelected && (
          <View style={styles.tickCircle}>
            <Text style={styles.tick}>✔</Text>
          </View>
        )}
        <FastImage
          source={imageSource ? {uri: imageSource} : images.alphabets.a}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.imgStyle}
        />
        <Text style={styles.titleStyle}>{title}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: rwp(140),
    height: rhp(140),
    borderRadius: 16,
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginHorizontal: rwp(15),
    marginVertical: rhp(15),
  },
  imgStyle: {
    height: rhp(80),
    width: rwp(80),
  },
  titleStyle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.backgroundClr,
    fontSize: rfs(16),
  },
  tickCircle: {
    position: 'absolute',
    top: rhp(5),
    right: rwp(5),
    width: rhp(24),
    height: rhp(24),
    borderRadius: rhp(12),
    backgroundColor: colors.backgroundClr,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tick: {
    fontSize: rfs(12),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.white,
  },
});
export default InterestsTouchableComponent;
