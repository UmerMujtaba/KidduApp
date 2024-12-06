import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../../../assets/images';
import CustomAppBar from '../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../components/atoms/customBottomTab';
import NumbersQuestionBar from '../../../components/atoms/numbersQuestionBar';
import {colors} from '../../../constants/colors';
import {styles} from './styles';

const QuestionImages = {
  image1: images.cubImage,
};

const NumbersExercise = () => {
  const [selected, setSelected] = useState(null);
  const [feedbackColor, setFeedbackColor] = useState(null);
  const [randomCount, setRandomCount] = useState(
    Math.floor(Math.random() * 10) + 1,
  );
  const [options, setOptions] = useState([]);
  const [exerciseIndex, setExerciseIndex] = useState(1);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [showLottie, setShowLottie] = useState(false);
  const [isCorrect, setIsCorrect] = useState('');

  const totalExercises = 10;

  const generateOptions = () => {
    const correctAnswer = randomCount;
    const options = [correctAnswer];

    while (options.length < 5) {
      const randomOption = Math.floor(Math.random() * 10) + 1;
      if (!options.includes(randomOption) && randomOption !== correctAnswer) {
        options.push(randomOption);
      }
    }

    return options.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const newOptions = generateOptions();
    setOptions(newOptions);
  }, [randomCount]);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: exerciseIndex / totalExercises,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [exerciseIndex]);

  const handleSelection = number => {
    setSelected(number);
    if (number === randomCount) {
      setFeedbackColor(colors.backgroundClr);
      setIsCorrect('correct');
      setShowLottie(true);
      setTimeout(() => {
        setShowLottie(false);
        handleNext('correct');
      }, 3000);
    } else {
      setFeedbackColor(colors.darkOrange);
      setIsCorrect('incorrect');
      setShowLottie(true);
      setTimeout(() => {
        setShowLottie(false);
      }, 3000);
    }
  };

  const handleNext = value => {
    if (value ? value == 'correct' : isCorrect == 'correct') {
      if (exerciseIndex < totalExercises) {
        setExerciseIndex(exerciseIndex + 1);
        setRandomCount(Math.floor(Math.random() * 10) + 1);
        setFeedbackColor('transparent');
      }
    } else if (isCorrect == 'incorrect') {
      setShowLottie(true);
      setTimeout(() => {
        setShowLottie(false);
      }, 3000);
    }
  };

  const handleBack = () => {
    if (exerciseIndex > 1) {
      setExerciseIndex(exerciseIndex - 1);
      setRandomCount(Math.floor(Math.random() * 10) + 1);
    }
  };

  const renderImages = () => {
    let imagesArray = [];
    for (let i = 0; i < randomCount; i++) {
      imagesArray.push(
        <Image key={i} source={QuestionImages.image1} style={styles.image} />,
      );
    }
    return imagesArray;
  };

  const handleLottieFinish = () => {
    setShowLottie(false);
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Numbers'} />
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          <View style={styles.bottomBody}>
            <NumbersQuestionBar />

            <View style={styles.exerciseContainer}>
              <View>
                <Text style={styles.exerciseText}>Exercise</Text>
              </View>
              <View>
                <Text style={styles.exerciseCountText}>
                  {exerciseIndex} / {totalExercises}
                </Text>
              </View>
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
            {showLottie ? (
              isCorrect == 'correct' ? (
                <LottieView
                  source={require('../../../assets/lottie/fireworks.json')}
                  autoPlay
                  loop={false}
                  style={styles.fireworksAnimation}
                />
              ) : (
                isCorrect == 'incorrect' && (
                  <LottieView
                    source={require('../../../assets/lottie/error.json')}
                    autoPlay
                    loop={false}
                    style={styles.fireworksAnimation}
                  />
                )
              )
            ) : null}
            <View style={styles.imagesContainer}>{renderImages()}</View>
            <View style={styles.optionsContainer}>
              {options.map(number => (
                <TouchableOpacity
                  key={number}
                  style={[
                    styles.optionButton,
                    selected === number && {backgroundColor: feedbackColor},
                  ]}
                  onPress={() => handleSelection(number)}>
                  <Text style={styles.optionText}>{number}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <CustomBottomTab onNext={handleNext} onBack={handleBack} />
      </View>
    </ImageBackground>
  );
};

export default NumbersExercise;
