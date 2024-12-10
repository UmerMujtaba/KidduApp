import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Alert,
} from 'react-native';
import {styles} from './styles'; // Assuming the styles are stored here
import {images} from '../../../../assets/images';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../../components/atoms/customBottomTab'; // Assuming this is where the bottom tab is
import {GameExerciseData} from '../../../../utils/kidsGameScreenData';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const getRandomQuestions = () => {
  let selected = [];
  while (selected.length < 4) {
    const randomIndex = Math.floor(Math.random() * GameExerciseData.length);
    if (!selected.includes(randomIndex)) {
      selected.push(randomIndex);
    }
  }
  return selected.map(index => GameExerciseData[index]);
};

const KidsGameExercise = () => {
  const [pressed, setPressed] = useState(false);
  const totalExercises = GameExerciseData.length;
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [randomGame, setRandomGame] = useState(getRandomQuestions());
  const [correctGame, setCorrectGame] = useState(null);
  const [exerciseIndex, setExerciseIndex] = useState(1);
  const [showLottie, setShowLottie] = useState(false);
  const [isCorrect, setIsCorrect] = useState('');
  const [selectedGame, setSelectedGame] = useState([
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

  // Function to set new random game and correct answer
  const setNewRandomGame = () => {
    const selectedGame = getRandomQuestions();
    setRandomGame(selectedGame);

    // Select a random correct answer from the selected game options
    const correctIndex = Math.floor(Math.random() * selectedGame.length);
    setCorrectGame(selectedGame[correctIndex].name); // Set the name of the correct game
    setSelectionStatus([null, null, null, null]);
    setSelectedGame([false, false, false, false]);

    // Update progress bar
    Animated.timing(progress, {
      toValue: exerciseIndex / totalExercises,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  // Handle option selection
  const handleSelection = index => {
    setSelectedGame([false, false, false, false]);
    const updatedSelections = [...selectedGame];
    updatedSelections[index] = true;
    setSelectedGame(updatedSelections);

    const updatedStatus = [...selectionStatus];
    if (randomGame[index].name === correctGame) {
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
        setSelectedGame([false, false, false, false]);
      }, 3000);
    }
    setSelectionStatus(updatedStatus);
  };

  // Move to the next exercise
  const handleNext = value => {
    if (value === 'correct' && exerciseIndex < totalExercises) {
      setExerciseIndex(exerciseIndex + 1);
      setNewRandomGame();
    } else if (isCorrect === 'incorrect') {
      setShowLottie(true);
      setTimeout(() => {
        setShowLottie(false);
      }, 3000);
    }
  };

  // Move to the previous exercise
  const handleBack = () => {
    if (exerciseIndex > 1) {
      setExerciseIndex(exerciseIndex - 1);
      setNewRandomGame();
    }
  };

  // Set a new game when exerciseIndex changes
  useEffect(() => {
    setNewRandomGame();
  }, [exerciseIndex]);

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Quiz'} />
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          <View style={styles.bottomBody}>
            <View style={styles.questionRow}>
              <TouchableOpacity style={styles.btn} onPress={''}>
                <View style={[styles.btn, styles.btnInside]}>
                  <FastImage
                    source={images.icons.loudSpeaker}
                    style={styles.backIconStyle}
                  />
                </View>
              </TouchableOpacity>
              {/* Display the correct game name as the question */}
              <Text style={styles.question}>Choose the {correctGame}:</Text>
            </View>

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

            <View style={styles.gameContainer}>
              {randomGame.map((game, index) => (
                <View key={index} style={styles.gameCard}>
                  <TouchableOpacity
                    hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
                    style={[
                      styles.checkbox(pressed === index),
                      selectedGame[index]
                        ? selectionStatus[index] === true
                          ? styles.checkedGreen
                          : styles.checkedRed
                        : styles.unchecked,
                    ]}
                    onPressIn={() => setPressed(index)}
                    onPressOut={() => setPressed(null)}
                    onPress={() => handleSelection(index)}>
                    <FastImage
                      defaultSource={images.defaultImg}
                      source={{uri: game.image}}
                      style={styles.gameImage}
                    />
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                    hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
                    style={[
                      styles.checkbox(pressed === index),
                      selectedGame[index]
                        ? selectionStatus[index] === true
                          ? styles.checkedGreen
                          : styles.checkedRed
                        : styles.unchecked,
                    ]}
                    onPressIn={() => setPressed(index)}
                    onPressOut={() => setPressed(null)}
                    onPress={() => handleSelection(index)}>
                    {selectedGame[index] &&
                      (selectionStatus[index] === true ? (
                        <FontAwesome6
                          name="check"
                          size={16}
                          color="white"
                          style={styles.btnText}
                        />
                      ) : (
                        <Entypo
                          name="cross"
                          size={16}
                          color="white"
                          style={styles.btnText}
                        />
                      ))}
                  </TouchableOpacity> */}
                </View>
              ))}
            </View>

            {/* Button displaying the correct game name
            <TouchableOpacity style={[styles.btnStyle]}>
              <View style={[styles.btnStyle, styles.insideBtnStyle]}>
                <Text style={styles.btnText}>{correctGame}</Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </View>

        <CustomBottomTab onNext={handleNext} onBack={handleBack} />
      </View>
    </ImageBackground>
  );
};

export default KidsGameExercise;
