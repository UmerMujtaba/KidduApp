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
import {images} from '../../../assets/images';
import CustomAppBar from '../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../components/atoms/customBottomTab';
import ExerciseSetHeader from '../../../components/atoms/exerciseSetHeader';
import {colors} from '../../../constants/colors';
import {Strings} from '../../../constants/strings';
import {styles} from './styles';
import {TouchableButton} from '../../../components/atoms/button';
import {wp} from '../../../constants/dimensions';
import ExerciseHeader from '../../../components/atoms/exerciseHeader';

const ShapesExercise = () => {
  const progressAnim = useState(new Animated.Value(1))[0];
  const fireworksSoundRef = useRef(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [randomShapes, setRandomShapes] = useState([]);
  const [playFireworks, setPlayFireworks] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const shapeOptions = [
    {name: 'circle', image: images.shapes.circular},
    {name: 'square', image: images.shapes.square},
    {name: 'rectangle', image: images.shapes.rectangle},
    {name: 'triangle', image: images.shapes.triangle},
    {name: 'hexagon', image: images.shapes.hexagon},
    {name: 'pentagon', image: images.shapes.pentagon},
    {name: 'kite', image: images.shapes.kite},
    {name: 'kite', image: images.shapes.kite},
    {name: 'kite', image: images.shapes.kite},
    {name: 'kite', image: images.shapes.kite},
  ];

  useEffect(() => {
    fireworksSoundRef.current = new Sound(
      'https://res.cloudinary.com/dtpvy8gil/video/upload/v1732912980/samples/fireworks_kyowvx.wav', // Remote sound URL
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
      shapeOptions[Math.floor(Math.random() * shapeOptions.length)];
    const options = [currentShape];

    while (options.length < 3) {
      const randomOption =
        shapeOptions[Math.floor(Math.random() * shapeOptions.length)];
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

  const handleNext = () => {
    if (currentExerciseIndex < 9) {
      setCurrentExerciseIndex(prevIndex => prevIndex + 1);
      setIsCorrect(null);
      setSelectedOption(null);
      setPlayFireworks(false);
    }
  };

  const handleBack = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prevIndex => prevIndex - 1);
      setIsCorrect(null);
      setSelectedOption(null);
      setPlayFireworks(false);
    }
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    const correctShape = randomShapes[0];
    if (option.name === correctShape.name) {
      setIsCorrect(true);
      setPlayFireworks(true);

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
      setIsCorrect(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const progress = (currentExerciseIndex / shapeOptions.length) * 100;

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Shapes'} questionMark speaker onSpeakerPress={''} />
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          {/* <ExerciseSetHeader
            title={'Shapes Set'}
            count={`Exercise ${currentExerciseIndex + 1}/10`}
            description={'10 exercises'}
            totalExercises={shapeOptions.length}
            progress={progress}
          /> */}
          <ExerciseHeader
            letter={'Shapes Set'}
            currentExerciseIndex={currentExerciseIndex + 1}
            totalExercises={shapeOptions.length}
            // progress={progress}
          />

          <View style={styles.bottomBody}>
            {/* Display the question */}
            <View style={styles.imgContainerBorder}>
              <View style={styles.imgContainer}>
                <Image
                  source={randomShapes[0]?.image}
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
                      backgroundColor: isCorrect
                        ? colors.parrot
                        : colors.lightRed,
                    },
                  ]}
                  onPress={() => handleOptionSelect(shape)}>
                  <View
                    style={[
                      styles.optContainer,
                      styles.optContainerInside,
                      selectedOption?.name === shape.name && {
                        backgroundColor: isCorrect
                          ? colors.parrot
                          : colors.lightRed,
                      },
                    ]}>
                    <Image source={shape.image} style={styles.optImage} />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {isCorrect && playFireworks && (
            <LottieView
              source={require('../../../assets/lottie/fireworks.json')}
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
            <Image source={images.rewardHat} style={styles.modalImg} />
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
