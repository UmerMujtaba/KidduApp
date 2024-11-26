import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {images} from '../../../assets/images';
import CustomAppBar from '../../../components/atoms/customAppBar';
import ExampleScreen from '../../../components/molecules/exerciseComponent';
import {styles} from './styles';

const ShapesExercise = () => {
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Shapes'} questionMark />
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          {/* <ExerciseSetHeader /> */}

          <ExampleScreen exerciseType="shapes" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ShapesExercise;
