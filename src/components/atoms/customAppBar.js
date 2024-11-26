import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../assets/images';
import {colors} from '../../constants/colors';
import {hp, rfs, rhp, rwp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';

const CustomAppBar = ({
  title,
  questionMark,
  onQuestionPress,
  onSpeakerPress,
  speaker,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container(questionMark)}>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.goBack()}>
        <View style={[styles.btnStyle, styles.insideBtnStyle]}>
          <Image source={images.icons.backIcon} style={styles.backIconStyle} />
        </View>
      </TouchableOpacity>

      <View style={styles.textWrapper(questionMark)}>
        <Text style={styles.textHeading}>{title}</Text>
      </View>

      {questionMark && (
        <TouchableOpacity
          style={styles.questionBtnStyle}
          onPress={speaker ? onQuestionPress : onSpeakerPress}>
          <View
            style={[styles.questionBtnStyle, styles.insideQuestionBtnStyle]}>
            <Image
              source={
                speaker ? images.icons.loudSpeaker : images.icons.questionIcon
              }
              // source={images.icons.questionIcon}
              style={styles.backIconStyle}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: questionMark => ({
    flexDirection: 'row',
    paddingHorizontal: rwp(20),
    paddingVertical: rhp(10),
    marginTop: rhp(20),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  btnStyle: {
    width: rwp(45),
    backgroundColor: colors.blackishOrange,
    height: rhp(50),
    alignSelf: 'center',
    borderRadius: 16,
  },
  insideBtnStyle: {
    height: rhp(44),
    backgroundColor: colors.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  questionBtnStyle: {
    width: rwp(45),
    backgroundColor: colors.darkPink,
    height: rhp(50),
    alignSelf: 'center',
    borderRadius: 16,
  },
  insideQuestionBtnStyle: {
    height: rhp(44),
    backgroundColor: colors.lightPink,
    borderTopColor: 'pink',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  backIconStyle: {
    resizeMode: 'contain',
    height: rhp(20),
    width: rwp(20),
    alignSelf: 'center',
  },
  textWrapper: questionMark => ({
    width: questionMark ? hp(20) : hp(35),
    justifyContent: 'center',
    alignItems: 'center',
  }),
  textHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.white,
    fontSize: rfs(28),
  },
});

export default CustomAppBar;
