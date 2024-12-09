import {Dimensions, StyleSheet} from 'react-native';
import {hp, rfs, rhp, rwp, wp} from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.backgroundClr,
    paddingTop: rhp(20),
  },
  body: {
    flex: 1,
    // height: 500,
    width: '100%',
    backgroundColor: colors.disabled,
    alignSelf: 'flex-end',
    marginTop: rhp(10),
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  bodyInside: {
    flex: 1,
    marginTop: rhp(8),
    backgroundColor: colors.white,
    borderTopColor: 'pink',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  bottomBody: {
    paddingHorizontal: 10,
  },
  question: {
    fontSize: rfs(24),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
  },
  exerciseContainer: {
    marginVertical: rhp(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: rwp(5),
  },
  exerciseText: {
    fontSize: rfs(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.backgroundClr,
  },

  exerciseCountText: {
    fontSize: rfs(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.backgroundClr,
  },
  progressBarContainer: {
    width: '100%',
    height: 4,
    backgroundColor: colors.disabled,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.green,
  },
  animalContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  animalCard: {
    alignItems: 'center',
    marginBottom: 20,
  },
  animalImage: {
    width: rwp(120),
    height: rhp(120),
    margin: 10,
    borderRadius: 10,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
    marginBottom: 10,
  },
  unchecked: {
    backgroundColor: 'white',
  },
  checkedGreen: {
    backgroundColor: 'green', // Green when selected correctly
  },
  checkedRed: {
    backgroundColor: 'red', // Red when selected incorrectly
  },
  animalButton: {
    backgroundColor: 'blue',
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    flexDirection: 'row',
    width: '40%',
    alignSelf: 'center',
    borderRadius: 16,
    justifyContent: 'space-around',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  fireworksAnimation: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    zIndex: 1,
  },
  btnStyle: {
    width: wp(45),
    backgroundColor: colors.blackishOrange,
    height: rhp(50),
    alignSelf: 'center',
    borderRadius: 16,
    flexDirection: 'row',
  },
  btnText: {
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(20),
    color: colors.white,
    width: '60%',
    alignSelf: 'center',
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
  iconStyle: {
    resizeMode: 'contain',
    height: rhp(20),
    width: rwp(20),
    alignSelf: 'center',
    marginRight: 5,
  },
});
