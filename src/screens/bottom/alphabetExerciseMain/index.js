import React, {useEffect, useState} from 'react';
import {ImageBackground, View, Text, Image, Animated} from 'react-native';
import {images} from '../../../assets/images';
import CustomAppBar from '../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../components/atoms/customBottomTab';
import ExerciseHeader from '../../../components/atoms/exerciseHeader';
import {styles} from './styles';
import {Strings} from '../../../constants/strings';

const AlphabetsExerciseMain = ({route}) => {
  const {letterData} = route.params;

  if (!letterData || !letterData.exercises) {
    return <Text>{Strings.errorInvalidData}</Text>;
  }
  const progressAnim = useState(new Animated.Value(0))[0];
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [time, setTime] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (currentExerciseIndex < letterData.exercises.length - 1) {
      setCurrentExerciseIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prevIndex => prevIndex - 1);
    }
  };

  useEffect(() => {
    const progress = (currentExerciseIndex / letterData.exercises.length) * 100;
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [currentExerciseIndex, letterData.exercises.length, progressAnim]);

  const currentExercise = letterData.exercises[currentExerciseIndex];

  const progress = (currentExerciseIndex / letterData.exercises.length) * 100;

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Alphabets'} questionMark speaker />
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          <ExerciseHeader
            letter={`Lesson ${letterData.letter}`}
            currentExerciseIndex={currentExerciseIndex + 1}
            totalExercises={letterData.exercises.length}
            progress={progress}
          />
          <View style={styles.imgContainer}>
            {/* Optional: Circular Timer */}
            <View style={styles.timerContainer}>
              {/* <Text style={styles.timerText}>{time}</Text> */}
            </View>
            <Image source={currentExercise.image} style={styles.imgStyle} />
          </View>
          <Text style={styles.letterText}>{letterData.letter}</Text>
          <Text style={styles.itemName}>{currentExercise.name}</Text>
        </View>
      </View>
      <CustomBottomTab onNext={handleNext} onBack={handleBack} />
    </ImageBackground>
  );
};

export default AlphabetsExerciseMain;
