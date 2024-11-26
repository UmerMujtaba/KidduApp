import {View, Text, StyleSheet, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {rfs, rhp, rwp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
import {colors} from '../../constants/colors';
import {Strings} from '../../constants/strings';

const ExerciseHeader = ({letter, currentExerciseIndex, totalExercises}) => {
  const progress = (currentExerciseIndex / totalExercises) * 100;

  const progressAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [currentExerciseIndex, progress]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{letter}</Text>
        <Text style={styles.title}>
          {currentExerciseIndex}/{totalExercises}
        </Text>
      </View>

      <View style={styles.bottomBar}>
        <Animated.View
          style={[
            styles.topBar,
            {
              width: progressAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
      <Text style={styles.description}>
        {totalExercises} {Strings.exercises}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: rhp(20),
    paddingHorizontal: rwp(20),
    height: rhp(150),
    width: '100%',
    // backgroundColor: 'red',
    marginBottom: rhp(40),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.backgroundClr,
    fontSize: rfs(24),
  },
  bottomBar: {
    marginTop: rhp(20),
    width: '100%',
    height: 4,
    backgroundColor: colors.disabled,
    borderRadius: 20,
  },
  topBar: {
    width: '20%',
    height: 4,
    backgroundColor: 'green',
    borderRadius: 20,
  },
  description: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.backgroundClr,
    fontSize: rfs(22),
    marginTop: rhp(20),
  },
});
export default ExerciseHeader;
