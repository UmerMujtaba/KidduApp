import LottieView from 'lottie-react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import Sound from 'react-native-sound';
import {images} from '../../../../assets/images';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../../components/atoms/customBottomTab';
import {colors} from '../../../../constants/colors';
import {Strings} from '../../../../constants/strings';
import {styles} from './styles';
import {TouchableButton} from '../../../../components/atoms/button';
import {wp} from '../../../../constants/dimensions';
import ExerciseHeader from '../../../../components/atoms/exerciseHeader';
import FastImage from 'react-native-fast-image';
import {shapesExerciseData} from '../../../../utils/shapesExerciseData';

const ShapesExercise = () => {
  const progressAnim = useState(new Animated.Value(1))[0];
  const fireworksSoundRef = useRef(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [randomShapes, setRandomShapes] = useState([]);
  const [playFireworks, setPlayFireworks] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fireworksSoundRef.current = new Sound(
      'https://res.cloudinary.com/dtpvy8gil/video/upload/v1732912980/samples/fireworks_kyowvx.wav',
      null,
      error => {
        if (error) {
          console.log('Error loading sound', error);
        }
      },
    );

    return () => {
      if (fireworksSoundRef.current) {
        fireworksSoundRef.current.release();
      }
    };
  }, []);

  useEffect(() => {
    const currentShape =
      shapesExerciseData[Math.floor(Math.random() * shapesExerciseData.length)];
    const options = [currentShape];

    while (options.length < 3) {
      const randomOption =
        shapesExerciseData[
          Math.floor(Math.random() * shapesExerciseData.length)
        ];
      if (!options.includes(randomOption)) {
        options.push(randomOption);
      }
    }

    setRandomShapes(options.sort(() => Math.random() - 0.5));
  }, [currentExerciseIndex]);

  useEffect(() => {
    const progress = ((currentExerciseIndex + 1) / 10) * 100;
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();

    if (currentExerciseIndex === 9) {
      setShowModal(true);
    }
  }, [currentExerciseIndex]);

  const handleOptionSelect = option => {
    setSelectedOption(option);
    const correctShape = randomShapes[0]; // Assuming the correct shape is the first in the randomShapes array

    if (option.name === correctShape.name) {
      setIsCorrect('correct');
      setPlayFireworks(true);

      // Play fireworks sound on correct selection
      if (fireworksSoundRef.current) {
        fireworksSoundRef.current.play(success => {
          if (success) {
            console.log('Fireworks sound played successfully');
          } else {
            console.log('Error playing sound');
          }
        });
      }
    } else {
      setIsCorrect('incorrect');
      setPlayFireworks(false);
    }
  };

  const handleNext = () => {
    // Move to the next exercise only if the user selected the correct option
    if (isCorrect === 'correct' && currentExerciseIndex < 9) {
      setCurrentExerciseIndex(prevIndex => prevIndex + 1);
      setIsCorrect(null);
      setSelectedOption(null);
      setPlayFireworks(false);
    }
  };

  const handleBack = () => {
    // Allow going back only if the current exercise index is greater than 0
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prevIndex => prevIndex - 1);
      setIsCorrect(null);
      setSelectedOption(null);
      setPlayFireworks(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const progress = (currentExerciseIndex / shapesExerciseData.length) * 100;

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Shapes'} questionMark speaker onSpeakerPress={''} />
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          <ExerciseHeader
            letter={'Shapes Set'}
            currentExerciseIndex={currentExerciseIndex + 1}
            totalExercises={shapesExerciseData.length}
            // progress={progress}
          />

          <View style={styles.bottomBody}>
            {/* Display the question */}
            <View style={styles.imgContainerBorder}>
              <View style={styles.imgContainer}>
                <FastImage
                  source={{uri: randomShapes[0]?.image}}
                  style={styles.imgStyle}
                />
              </View>
            </View>
            <Text style={styles.questionText}>
              {Strings.pleaseSelectCorrectShape}
            </Text>

            {/* Options row */}
            <View style={styles.boxRow}>
              {randomShapes.map((shape, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optContainer,
                    selectedOption?.name === shape.name && {
                      backgroundColor:
                        isCorrect === 'correct'
                          ? colors.correct // Correct: Green
                          : isCorrect === 'incorrect'
                          ? colors.wrong // Incorrect: Red
                          : colors.transparent, // Default: Transparent
                    },
                  ]}
                  onPress={() => handleOptionSelect(shape)}>
                  <View
                    style={[
                      styles.optContainer,
                      styles.optContainerInside,
                      selectedOption?.name === shape.name && {
                        backgroundColor:
                          isCorrect === 'correct'
                            ? colors.correct // Correct: Green
                            : isCorrect === 'incorrect'
                            ? colors.wrong // Incorrect: Red
                            : colors.transparent, // Default: Transparent
                      },
                    ]}>
                    <FastImage
                      source={{uri: shape.image}}
                      style={styles.optImage}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {isCorrect && playFireworks && (
            <LottieView
              source={require('../../../../assets/lottie/fireworks.json')}
              autoPlay
              loop={false}
              style={styles.fireworksAnimation}
            />
          )}
          <CustomBottomTab onNext={handleNext} onBack={handleBack} />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal}
        statusBarTranslucent={true}>
        <TouchableOpacity style={styles.modalBackground} onPress={closeModal}>
          <View style={styles.modalContainer}>
            <FastImage source={images.rewardHat} style={styles.modalImg} />
            <Text style={styles.modalMessage}>{Strings.goodJob}</Text>
            <Text style={styles.modalSubMsg}>
              {Strings.unlockedYourNewReward}
            </Text>
            <TouchableButton
              btnPropStyle={{width: wp(60)}}
              btnInside={{width: wp(60)}}
              title={'Unlock'}
              onPress={closeModal}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </ImageBackground>
  );
};

export default ShapesExercise;
