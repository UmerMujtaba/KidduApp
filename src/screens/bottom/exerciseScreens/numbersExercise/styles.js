import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../../constants/colors';
import {rfs, rhp, rwp, wp} from '../../../../constants/dimensions';
import fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.disabled,
    alignSelf: 'flex-end',
    marginTop: 20,
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
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: rhp(10),
  },
  image: {
    width: rwp(100),
    height: rhp(100),
    margin: 5,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: rhp(10),
  },
  optionButton: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(12),
    height: rhp(55),
    borderRadius: 16,
  },
  optionText: {
    fontSize: rfs(34),
    color: 'black',
    textAlign: 'center',
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
  fireworksAnimation: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    zIndex: 1,
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContainer: {
    width: '90%',
    padding: 20,
    height: '60%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
  },

  modalMessage: {
    fontSize: rfs(30),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.backgroundClr,
    margin: 20,
    textAlign: 'center',
  },
  modalSubMsg: {
    fontSize: rfs(22),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.grey,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: colors.parrot,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalImg: {
    resizeMode: 'cover',
    height: rhp(250),
    width: rwp(250),
  },
});
