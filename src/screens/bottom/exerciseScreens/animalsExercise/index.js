import LottieView from 'lottie-react-native';
import React, {useState, useEffect} from 'react';
import {
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../../../../assets/images';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../../components/atoms/customBottomTab';
import NumbersQuestionBar from '../../../../components/atoms/numbersQuestionBar';
import {Strings} from '../../../../constants/strings';
import {AnimalsData} from '../../../../utils/animalsData';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const getRandomAnimals = () => {
  let selected = [];
  while (selected.length < 4) {
    const randomIndex = Math.floor(Math.random() * AnimalsData.length);
    if (!selected.includes(randomIndex)) {
      selected.push(randomIndex);
    }
  }
  return selected.map(index => AnimalsData[index]);
};

const AnimalsExercise = () => {
  const [pressed, setPressed] = useState(false);
  const totalExercises = 22;
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [selectedAnimals, setSelectedAnimals] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [selectionStatus, setSelectionStatus] = useState([
    null,
    null,
    null,
    null,
  ]);
  const [randomAnimals, setRandomAnimals] = useState(getRandomAnimals());
  const [correctAnimal, setCorrectAnimal] = useState(null);
  const [exerciseIndex, setExerciseIndex] = useState(1);
  const [showLottie, setShowLottie] = useState(false);
  const [isCorrect, setIsCorrect] = useState('');

  const setNewRandomAnimals = () => {
    const selectedAnimals = getRandomAnimals();
    console.log('🚀 ~ setNewRandomAnimals ~ selectedAnimals:', selectedAnimals);
    setRandomAnimals(selectedAnimals);
    const correctIndex = Math.floor(Math.random() * selectedAnimals.length);
    console.log('🚀 ~ setNewRandomAnimals ~ correctIndex:', correctIndex);
    setCorrectAnimal(selectedAnimals[correctIndex].letter);

    setSelectionStatus([null, null, null, null]);
    setSelectedAnimals([false, false, false, false]);

    Animated.timing(progress, {
      toValue: exerciseIndex / totalExercises,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleSelection = index => {
    setSelectedAnimals([false, false, false, false]);
    const updatedSelections = [...selectedAnimals];
    updatedSelections[index] = true;
    setSelectedAnimals(updatedSelections);

    const updatedStatus = [...selectionStatus];
    if (randomAnimals[index].letter === correctAnimal) {
      updatedStatus[index] = true;
      setIsCorrect('correct');
      setShowLottie(true);
      setTimeout(() => {
        setShowLottie(false);
        handleNext('correct');
      }, 3000);
    } else {
      updatedStatus[index] = false;
      setIsCorrect('incorrect');
      setShowLottie(true);
      setTimeout(() => {
        setShowLottie(false);
        setSelectionStatus([null, null, null, null]);
        setSelectedAnimals('');
      }, 3000);
    }
    setSelectionStatus(updatedStatus);
  };

  const handleNext = value => {
    if (value === 'correct' && exerciseIndex < totalExercises) {
      setExerciseIndex(exerciseIndex + 1);
      setNewRandomAnimals();
    } else if (isCorrect === 'incorrect') {
      setShowLottie(true);
      setTimeout(() => {
        setShowLottie(false);
      }, 3000);
    }
  };

  const handleBack = () => {
    if (exerciseIndex > 1) {
      setExerciseIndex(exerciseIndex - 1);
      setNewRandomAnimals();
    }
  };

  useEffect(() => {
    setNewRandomAnimals();
    console.log('🚀 ~ useEffect ~ setNewRandomAnimals:', randomAnimals);
  }, [exerciseIndex]);

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Animals'} />
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
                    width: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0%', '100%'],
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
              {randomAnimals.map((animal, index) => (
                <View key={index} style={styles.animalCard}>
                  <FastImage
                    defaultSource={images.defaultImg}
                    source={{uri: animal.image}}
                    style={styles.animalImage}
                  />

                  <TouchableOpacity
                    hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
                    style={[
                      styles.checkbox(pressed === index),
                      selectedAnimals[index]
                        ? selectionStatus[index] === true
                          ? styles.checkedGreen
                          : styles.checkedRed
                        : styles.unchecked,
                    ]}
                    onPressIn={() => setPressed(index)}
                    onPressOut={() => setPressed(null)}
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
              ))}
            </View>

            <TouchableOpacity style={[styles.btnStyle]}>
              <View style={[styles.btnStyle, styles.insideBtnStyle]}>
                <Text style={styles.btnText}>{correctAnimal}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <CustomBottomTab onNext={handleNext} onBack={handleBack} />
      </View>
    </ImageBackground>
  );
};

export default AnimalsExercise;
