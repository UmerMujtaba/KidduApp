import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomAppBar from '../../../components/atoms/customAppBar';
import {images} from '../../../assets/images';
import {styles} from './styles';
import AlphabetComponent from '../../../components/atoms/alphabetComponent';
import {AnimalsData} from '../../../utils/animalsData';
import {colors} from '../../../constants/colors';
import {rhp} from '../../../constants/dimensions';
import Tts from 'react-native-tts';
const AnimalsScreen = () => {
  const [playingSound, setPlayingSound] = useState(null);

  const renderItem = ({item}) => {
    console.log('🚀 ~ renderItem ~ item:', item);

    const {letter, image, soundFile} = item;

    const handleSpeakerPress = () => {
      console.log('🚀 ~ handleSpeakerPress ~ item:', item);
      const word = item.letter;
      console.log('🚀 ~ handleSpeakerPress ~ word:', word);
      Tts.speak(word);
      Tts.setDefaultVoice('com.apple.speech.synthesis.voice.Albert');
      Tts.setDefaultPitch(0.7);
      Tts.setDefaultRate(0.5, true);
    };

    return (
      <View>
        <AlphabetComponent
          letter={letter}
          // imageSource={image}
          URI={image}
          soundFile={soundFile}
          playingSound={playingSound}
          setPlayingSound={setPlayingSound}
        />
        <View style={{alignSelf: 'center', marginTop: rhp(10)}}>
          <View style={styles.btnContainer} activeOpacity={0.7}>
            <TouchableOpacity
              style={[styles.btnContainer, styles.btnContainerInside]}
              activeOpacity={0.7}
              onPress={handleSpeakerPress}>
              <Text style={styles.animalName}>{letter}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Animals'} />
      <FlatList
        data={AnimalsData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      />
    </ImageBackground>
  );
};

export default AnimalsScreen;
