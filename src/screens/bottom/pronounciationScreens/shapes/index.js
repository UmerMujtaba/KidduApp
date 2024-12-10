import React, {useState} from 'react';
import {FlatList, ImageBackground} from 'react-native';
import {images} from '../../../../assets/images';
import AlphabetComponent from '../../../../components/atoms/alphabetComponent';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import {styles} from './styles';
import {shapesData} from '../../../../utils/shapesScreenData';
import Tts from 'react-native-tts';

const ShapesScreen = () => {
  // const [playingSound, setPlayingSound] = useState(null);

  const renderItem = ({item}) => {
    console.log('🚀 ~ renderItem ~ item:', item);
    // Destructure item to get letter, image, and soundFile
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
      <AlphabetComponent
        letter={letter}
        URI={image}
        soundFile={''}
        playingSound={''}
        setPlayingSound={''}
        onPress={handleSpeakerPress}
      />
    );
  };
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Shapes'} />
      <FlatList
        data={shapesData}
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

export default ShapesScreen;
