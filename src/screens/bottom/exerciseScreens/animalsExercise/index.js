import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useDispatch, useSelector} from 'react-redux';
import {images} from '../../../../assets/images';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../../components/atoms/customBottomTab';
import NumbersQuestionBar from '../../../../components/atoms/numbersQuestionBar';
import StickerModal from '../../../../components/atoms/stickerModal';
import {Strings} from '../../../../constants/strings';
import {
  setCorrectAnimal,
  setExerciseIndex,
  setIsCorrect,
  setProgress,
  setRandomAnimals,
  setSelectedAnimals,
  setSelectionStatus,
  setShowLottie,
} from '../../../../redux/slices/animalExerciseSlice';
import {addAnimalSticker} from '../../../../redux/slices/rewardsSlice';
import {AnimalsData} from '../../../../utils/animalsData';
import {styles} from './styles';
import {useStickerManager} from '../../../../hooks';

const AnimalsExercise = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [earnedSticker, setEarnedSticker] = useState(null);
  const [showStickerModal, setShowStickerModal] = useState(false);
  const {
    exerciseIndex,
    progress,
    selectedAnimals,
    selectionStatus,
    randomAnimals,
    correctAnimal,
    showLottie,
    isCorrect,
  } = useSelector(state => state.animalExerciseReducer);

  const shuffledAnimals = [...AnimalsData];
  // const totalExercises = 2;
  const totalExercises = shuffledAnimals.length;
  const {getStickerForExercise} = useStickerManager();
  const progressAnim = useState(new Animated.Value(0))[0];

  const setNewRandomAnimals = () => {
    shuffledAnimals.sort(() => Math.random() - 0.5);

    const randomizedAnimals = shuffledAnimals.slice(0, 4);
    dispatch(setRandomAnimals(randomizedAnimals));

    const randomIndex = Math.floor(Math.random() * randomizedAnimals.length);
    dispatch(setCorrectAnimal(randomizedAnimals[randomIndex].letter));

    dispatch(setSelectionStatus([null, null, null, null]));
    dispatch(setSelectedAnimals([false, false, false, false]));

    // Update the progress using Animated.timing
    Animated.timing(progressAnim, {
      toValue: (exerciseIndex / totalExercises) * 100, // Normalize to 0-100
      duration: 500, // Set duration for smooth animation
      useNativeDriver: false,
    }).start();
  };

  const handleSelection = index => {
    const updatedSelections = [false, false, false, false];
    updatedSelections[index] = true;
    dispatch(setSelectedAnimals(updatedSelections));

    const updatedStatus = [...selectionStatus];
    if (randomAnimals[index].letter === correctAnimal) {
      updatedStatus[index] = true;
      dispatch(setIsCorrect('correct'));
      dispatch(setShowLottie(true));
      setTimeout(() => {
        dispatch(setShowLottie(false));
        handleNext('correct');
      }, 3000);
    } else {
      updatedStatus[index] = false;
      dispatch(setIsCorrect('incorrect'));
      dispatch(setShowLottie(true));
      setTimeout(() => {
        dispatch(setShowLottie(false));
        dispatch(setSelectionStatus([null, null, null, null]));
        dispatch(setSelectedAnimals([false, false, false, false]));
      }, 3000);
    }
    dispatch(setSelectionStatus(updatedStatus));

    if (exerciseIndex === totalExercises) {
      const sticker = getStickerForExercise();

      setEarnedSticker(sticker);
      setShowStickerModal(true);

      dispatch(addAnimalSticker(sticker));
    }
  };

  const handleNext = value => {
    if (value === 'correct' && exerciseIndex < totalExercises) {
      dispatch(setExerciseIndex(exerciseIndex + 1));
      setNewRandomAnimals();
    } else if (isCorrect === 'incorrect') {
      dispatch(setShowLottie(true));
      setTimeout(() => {
        dispatch(setShowLottie(false));
      }, 3000);
    }
  };

  const handleBack = () => {
    if (exerciseIndex > 1) {
      dispatch(setExerciseIndex(exerciseIndex - 1));
      setNewRandomAnimals();
    }
  };

  useEffect(() => {
    setNewRandomAnimals();
  }, [exerciseIndex]);

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar
        title={'Animals'}
        onBackPress={() => navigation.goBack()}
        back
      />
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          <View style={styles.bottomBody}>
            <NumbersQuestionBar title={Strings.canYouChooseTheCorrect} />

            <View style={styles.exerciseContainer}>
              <Text style={styles.exerciseText}>Exercise</Text>
              <Text style={styles.exerciseCountText}>
                {exerciseIndex} / {totalExercises}
              </Text>
            </View>

            <View style={styles.progressBarContainer}>
              <Animated.View
                style={[
                  styles.progressBar,
                  {
                    width: progressAnim.interpolate({
                      inputRange: [0, 100],
                      outputRange: ['0%', '100%'], // Interpolates width from 0% to 100%
                    }),
                  },
                ]}
              />
            </View>

            {showLottie && (
              <LottieView
                source={
                  isCorrect === 'correct'
                    ? require('../../../../assets/lottie/fireworks.json')
                    : require('../../../../assets/lottie/error.json')
                }
                autoPlay
                loop={false}
                style={styles.fireworksAnimation}
              />
            )}

            <View style={styles.animalContainer}>
              {Array.isArray(randomAnimals) && randomAnimals.length > 0 ? (
                randomAnimals.map((animal, index) => (
                  <View key={index} style={styles.animalCard}>
                    <FastImage
                      defaultSource={images.defaultImg}
                      source={{uri: animal.image}}
                      style={styles.animalImage}
                    />
                    <TouchableOpacity
                      hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
                      style={[
                        styles.checkbox(selectedAnimals[index]),
                        selectedAnimals[index]
                          ? selectionStatus[index] === true
                            ? styles.checkedGreen
                            : styles.checkedRed
                          : styles.unchecked,
                      ]}
                      onPress={() => handleSelection(index)}>
                      {selectedAnimals[index] &&
                        (selectionStatus[index] === true ? (
                          <FontAwesome6
                            name="check"
                            size={16}
                            color="white"
                            style={styles.btnText}
                          />
                        ) : (
                          <EntypoIcon
                            name="cross"
                            size={16}
                            color="white"
                            style={styles.btnText}
                          />
                        ))}
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <Text>No animals available.</Text>
              )}
            </View>
            <TouchableOpacity style={[styles.btnStyle]}>
              <View style={[styles.btnStyle, styles.insideBtnStyle]}>
                <Text style={styles.btnText}>{correctAnimal}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <StickerModal
          isVisible={showStickerModal}
          earnedSticker={earnedSticker}
          onClose={() => {
            setShowStickerModal(false);
            setTimeout(() => {
              navigation.goBack();
            }, 1000);
          }}
        />
        <CustomBottomTab onNext={handleNext} onBack={handleBack} />
      </View>
    </ImageBackground>
  );
};

export default AnimalsExercise;
