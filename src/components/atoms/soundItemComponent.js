import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/colors';
import {rfs, rhp, wp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';

const SoundItemComponent = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            height: rhp(84),
            backgroundColor: colors.darkOrange,
            borderTopColor: 'orange',
            borderLeftColor: 'orange',
            borderRightColor: 'orange',
            borderBottomColor: 'white',
            justifyContent: 'center',
          },
        ]}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(85),
    backgroundColor: colors.blackishOrange,
    height: rhp(94),
    borderRadius: 16,
    marginBottom: rhp(10),
  },
  titleStyle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(24),
    color: colors.white,
    textAlign: 'center',
  },
});

export default SoundItemComponent;
