import {StyleSheet} from 'react-native';
import {hp, rhp, rwp, wp} from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  svg: {
    position: 'absolute',
    top: 20,
    height: 300,
    width: 300,
  },
  canvas: {
    width: 300,
    height: 300,
    backgroundColor: '#F1f3d9',
  },
  feedback: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
  },
  insideBorder: {
    position: 'absolute',
    top: 50,
    left: 50,
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
  },
  slider: {
    width: 200,
    marginTop: 20,
  },
});
