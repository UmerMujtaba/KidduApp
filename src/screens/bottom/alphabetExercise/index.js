import React from 'react';
import {ImageBackground, View} from 'react-native';
import {images} from '../../../assets/images';
import CustomAppBar from '../../../components/atoms/customAppBar';
import ExampleScreen from '../../../components/molecules/exerciseComponent';
import {styles} from './styles';

const AlphabetsExercise = () => {
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Alphabets'} questionMark />
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          <ExampleScreen exerciseType="alphabet" Data />
        </View>
      </View>
    </ImageBackground>
  );
};

export default AlphabetsExercise;
