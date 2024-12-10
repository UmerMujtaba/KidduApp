import {StyleSheet} from 'react-native';
import fonts from '../../../constants/fonts';
import {hp, rfs, rhp, rwp, wp} from '../../../constants/dimensions';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnStyle: {
    width: wp(8),
    backgroundColor: colors.blackishOrange,
    height: rhp(38),
    alignSelf: 'center',
    borderRadius: 16,
    // justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(20),
    color: colors.white,
    alignSelf: 'center',
  },
  insideBtnStyle: {
    height: rhp(33),
    backgroundColor: colors.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
});
