import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
const RewardsScreen = () => {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.checkbox}>
        <TouchableOpacity
          hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
          style={[styles.checkbox, styles.checkBoxInside]}>
          <FontAwesome6 name="check" size={16} color="white" />
        </TouchableOpacity>
      </TouchableOpacity> */}

      <TouchableOpacity style={[styles.btnStyle]}>
        <View style={[styles.btnStyle, styles.insideBtnStyle]}>
          <FontAwesome6
            name="check"
            size={16}
            color="white"
            style={styles.btnText}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default RewardsScreen;
