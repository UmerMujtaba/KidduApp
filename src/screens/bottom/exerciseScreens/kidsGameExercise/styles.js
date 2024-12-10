import {Dimensions, StyleSheet} from 'react-native';
import {hp, rfs, rhp, rwp, width, wp} from '../../../../constants/dimensions';
import fonts from '../../../../constants/fonts';
import {colors} from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: rhp(20),
  },
  body: {
    flex: 1,
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
  questionRow: {
    marginTop: rhp(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  btn: {
    backgroundColor: colors.blackishOrange,
    height: rhp(50),
    width: wp(12),
    borderRadius: 16,
  },
  btnInside: {
    height: rhp(44),
    backgroundColor: colors.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  backIconStyle: {
    resizeMode: 'contain',
    height: rhp(20),
    width: rwp(20),
    alignSelf: 'center',
  },
  question: {
    fontSize: rfs(32),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.darkOrange,
    paddingHorizontal: 20,
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
  fireworksAnimation: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    zIndex: 1,
  },

  gameContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  gameCard: {
    alignItems: 'center',
    marginBottom: 20,
  },
  gameImage: {
    width: rwp(140),
    height: rhp(140),
    margin: 16,
    resizeMode: 'cover',
    borderRadius: rwp(12),
  },
  checkbox: pressed => ({
    borderRadius: rwp(8),
    width: rwp(170),
    height: rhp(170),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.46,
    transform: [{scale: pressed ? 0.9 : 1}, {translateY: pressed ? 4 : 0}],
    transition: 'all 0.1s ease',
  }),

  checkedGreen: {
    backgroundColor: colors.correct,
  },

  checkedRed: {
    backgroundColor: colors.wrong,
  },

  btnText: {
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(16),
    color: colors.white,
    alignSelf: 'center',
  },
});
