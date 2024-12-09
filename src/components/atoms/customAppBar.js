import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../assets/images';
import {colors} from '../../constants/colors';
import {hp, rfs, rhp, rwp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
import FastImage from 'react-native-fast-image';

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
      <View style={{width: '20%'}}>
        <View style={styles.btnStyle}>
          <TouchableOpacity
            style={[styles.btnStyle, styles.insideBtnStyle]}
            onPress={() => navigation.goBack()}>
            <FastImage
              source={images.icons.backIcon}
              style={styles.backIconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.textWrapper(questionMark)}>
        <Text style={styles.textHeading}>{title}</Text>
      </View>
      <View style={{width: '20%'}}>
        {questionMark && (
          <TouchableOpacity
            style={styles.questionBtnStyle}
            onPress={speaker ? onSpeakerPress : onQuestionPress}>
            <View
              style={[styles.questionBtnStyle, styles.insideQuestionBtnStyle]}>
              <FastImage
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: questionMark => ({
    flexDirection: 'row',
    paddingHorizontal: rwp(10),
    paddingVertical: rhp(10),
    marginTop: rhp(20),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  }),
  btnStyle: {
    width: rwp(45),
    backgroundColor: colors.blackishOrange,
    height: rhp(50),
    // alignSelf: 'center',
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
    alignSelf: 'flex-end',
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
    width: '60%',
    // backgroundColor: 'blue',
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
