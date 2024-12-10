import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {Animated, Image, ImageBackground, Text, View} from 'react-native';
import Tts from 'react-native-tts';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../../components/atoms/customBottomTab';
import ExerciseHeader from '../../../../components/atoms/exerciseHeader';
import {images} from '../../../../assets/images';
import {Strings} from '../../../../constants/strings';
const AlphabetsExerciseMain = ({route}) => {
  const {letterData} = route.params;

  if (!letterData || !letterData.exercises) {
    return <Text>{Strings.errorInvalidData}</Text>;
  }

  const progressAnim = useState(new Animated.Value(0))[0];
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [time, setTime] = useState(60);
  const [isCorrect, setIsCorrect] = useState(null);
  const currentExercise = letterData.exercises[currentExerciseIndex];
  const correctWord = currentExercise.name;
  const progress = (currentExerciseIndex / letterData.exercises.length) * 100;

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

  useEffect(() => {
    const progress = (currentExerciseIndex / letterData.exercises.length) * 100;
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [currentExerciseIndex, letterData.exercises.length, progressAnim]);

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
  const handleSpeakerPress = () => {
    Tts.setDefaultVoice('com.apple.speech.synthesis.voice.Albert');
    Tts.setDefaultPitch(0.7);
    Tts.setDefaultRate(0.5, true);

    const word = currentExercise.name;
    console.log('🚀 ~ handleSpeakerPress ~ word:', word);
    Tts.speak(word);
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar
        title={'Alphabets'}
        questionMark
        speaker
        onSpeakerPress={handleSpeakerPress}
      />
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          <ExerciseHeader
            letter={`Lesson ${letterData.letter}`}
            currentExerciseIndex={currentExerciseIndex + 1}
            totalExercises={letterData.exercises.length}
            progress={progress}
          />
          <View style={styles.imgContainer}>
            <FastImage
              source={{uri: currentExercise.image}}
              style={styles.imgStyle}
            />
          </View>
          <Text style={styles.letterText}>{letterData.letter}</Text>
          <Text style={styles.itemName}>{currentExercise.name}</Text>

          {isCorrect !== null && (
            <LottieView
              source={
                isCorrect
                  ? require('../../../../assets/lottie/fireworks.json')
                  : require('../../../../assets/lottie/error.json')
              }
              autoPlay
              loop={false}
              style={styles.lottieStyle}
            />
          )}
        </View>
      </View>

      <CustomBottomTab
        onNext={handleNext}
        onBack={handleBack}
        onSpeak={() => startListening}
      />
    </ImageBackground>
  );
};

export default AlphabetsExerciseMain;
