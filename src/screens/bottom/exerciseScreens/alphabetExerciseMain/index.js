import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Animated, ImageBackground, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Tts from 'react-native-tts';
import {images} from '../../../../assets/images';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../../components/atoms/customBottomTab';
import ExerciseHeader from '../../../../components/atoms/exerciseHeader';
import {Strings} from '../../../../constants/strings';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {setAlphabetProgress} from '../../../../redux/slices/alphabetsExerciseSlice';

const AlphabetsExerciseMain = ({route}) => {
  const {letterData, index} = route.params;
  const dispatch = useDispatch();

  console.log('🚀 ~ AlphabetsExerciseMain ~ letterData:', letterData);
  console.log('🚀 ~ AlphabetsExerciseMain ~ index:', index);

  if (!letterData || !letterData.exercises) {
    return <Text>{Strings.errorInvalidData}</Text>;
  }
  const progressFromRedux = useSelector(
    state =>
      state.alphabetsExerciseReducer.alphabetsExerciseList[index]?.progress,
  );

  const progressAnim = useState(new Animated.Value(1))[0];
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(
    progressFromRedux || 0,
  );

  const currentExercise = letterData.exercises[currentExerciseIndex];
  const progress = currentExerciseIndex / letterData.exercises.length;

  const navigation = useNavigation();

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
      setCurrentExerciseIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        dispatch(setAlphabetProgress({index, progress: newIndex}));
        return newIndex;
      });
    }
  };

  const handleBack = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prevIndex => {
        const newIndex = prevIndex - 1;
        dispatch(setAlphabetProgress({index, progress: newIndex}));
        return newIndex;
      });
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

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar
        title={'Alphabets'}
        questionMark
        speaker
        onSpeakerPress={handleSpeakerPress}
        onBackPress={goBack}
        back
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
        </View>
      </View>

      <CustomBottomTab
        onNext={handleNext}
        onBack={handleBack}
        onSpeak={handleSpeakerPress}
      />
    </ImageBackground>
  );
};

export default AlphabetsExerciseMain;
