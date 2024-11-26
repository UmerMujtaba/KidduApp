import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import CustomAppBar from '../../../components/atoms/customAppBar';
import ExampleScreen from '../../../components/molecules/exerciseComponent';
import {images} from '../../../assets/images';
import {styles} from './styles';

const NumbersExercise = () => {
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Numbers'} questionMark />
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          {/* <ExerciseSetHeader /> */}

          <ExampleScreen exerciseType="numbers" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default NumbersExercise;
