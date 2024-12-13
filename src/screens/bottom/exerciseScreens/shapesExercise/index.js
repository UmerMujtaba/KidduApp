import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Sound from 'react-native-sound';
import {useDispatch, useSelector} from 'react-redux';
import {images} from '../../../../assets/images';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../../components/atoms/customBottomTab';
import ExerciseHeader from '../../../../components/atoms/exerciseHeader';
import StickerModal from '../../../../components/atoms/stickerModal';
import {colors} from '../../../../constants/colors';
import {Strings} from '../../../../constants/strings';
import {addNumberSticker} from '../../../../redux/slices/rewardsSlice';
import {
  setCurrentExerciseIndex,
  setIsCorrect,
  setPlayFireworks,
  setRandomShapes,
  setSelectedOption,
  setShowModal,
} from '../../../../redux/slices/shapesExerciseSlice';
import {shapesExerciseData} from '../../../../utils/shapesExerciseData';
import {styles} from './styles';
import {useStickerManager} from '../../../../hooks';

const ShapesExercise = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const progressAnim = new Animated.Value(1);
  const fireworksSoundRef = useRef(null);
  const [earnedSticker, setEarnedSticker] = useState(null);
  const [showStickerModal, setShowStickerModal] = useState(false);
  const {getStickerForExercise} = useStickerManager();

  const {
    currentExerciseIndex,
    selectedOption,
    isCorrect,
    randomShapes,
    playFireworks,
    showModal,
  } = useSelector(state => state.shapesExerciseReducer);

  const [isFireworksPlaying, setIsFireworksPlaying] = useState(false);

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
    dispatch(setRandomShapes());
  }, [currentExerciseIndex, dispatch]);
  const progress = ((currentExerciseIndex + 1) / 10) * 100;

  // Update progress animation if needed
  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();

    if (currentExerciseIndex === 9) {
      dispatch(setShowModal(true));
    }
  }, [currentExerciseIndex, dispatch]);

  const handleOptionSelect = option => {
    dispatch(setSelectedOption(option));
    const correctShape = randomShapes[0];

    if (option.name === correctShape.name) {
      dispatch(setIsCorrect('correct'));
      dispatch(setPlayFireworks(true));
      setIsFireworksPlaying(true);

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
      dispatch(setIsCorrect('incorrect'));
      dispatch(setPlayFireworks(false));
      setIsFireworksPlaying(false);
    }

    if (currentExerciseIndex === 9) {
      const sticker = getStickerForExercise();

      setEarnedSticker(sticker);
      setShowStickerModal(true);

      dispatch(addNumberSticker(sticker));
    }
  };

  const handleNext = () => {
    if (isCorrect === 'correct' && currentExerciseIndex < 9) {
      dispatch(setCurrentExerciseIndex(currentExerciseIndex + 1));
      dispatch(setIsCorrect(null));
      dispatch(setSelectedOption(null));
      dispatch(setPlayFireworks(false));
      setIsFireworksPlaying(false);
    }
  };

  const handleBack = () => {
    if (currentExerciseIndex > 0) {
      dispatch(setCurrentExerciseIndex(currentExerciseIndex - 1));
      dispatch(setIsCorrect(null));
      dispatch(setSelectedOption(null));
      dispatch(setPlayFireworks(false));
      setIsFireworksPlaying(false);
    }
  };

  const closeModal = () => {
    dispatch(setShowModal(false));
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar
        title={'Shapes'}
        questionMark
        speaker
        onSpeakerPress={''}
        onBackPress={() => navigation.goBack()}
        back
      />
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          <ExerciseHeader
            letter={'Shapes Set'}
            currentExerciseIndex={currentExerciseIndex + 1}
            totalExercises={shapesExerciseData.length}
            progress={progress}
          />

          <View style={styles.bottomBody}>
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

            <View style={styles.boxRow}>
              {randomShapes.map((shape, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optContainer,
                    selectedOption?.name === shape.name && {
                      backgroundColor:
                        isCorrect === 'correct'
                          ? colors.correct
                          : isCorrect === 'incorrect'
                          ? colors.wrong
                          : colors.transparent,
                    },
                  ]}
                  onPress={() => handleOptionSelect(shape)}>
                  <View
                    style={[styles.optContainer, styles.optContainerInside]}>
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
              onAnimationFinish={() => {
                if (isFireworksPlaying) {
                  handleNext();
                }
              }}
            />
          )}

          <StickerModal
            isVisible={showStickerModal}
            earnedSticker={earnedSticker}
            onClose={() => {
              setShowStickerModal(false);
              setTimeout(() => {
                navigation.goBack();
              }, 2000);
            }}
          />
          <CustomBottomTab onNext={handleNext} onBack={handleBack} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ShapesExercise;
