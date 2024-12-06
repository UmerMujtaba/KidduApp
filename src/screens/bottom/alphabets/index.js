import React, {useState} from 'react';
import {FlatList, ImageBackground} from 'react-native';
import {images} from '../../../assets/images';
import AlphabetComponent from '../../../components/atoms/alphabetComponent';
import CustomAppBar from '../../../components/atoms/customAppBar';
import {styles} from './styles';
import {alphabetData} from '../../../utils/alphabetsScreenData';

const AlphabetsScreen = ({route}) => {
  const [playingSound, setPlayingSound] = useState(null);
  const screenData = route?.params?.screenData ?? [];
  const title = route?.params?.title ?? '';

  const renderItem = ({item}) => {
    console.log('🚀 ~ renderItem ~ item:', item);
    // Destructure item to get letter, image, and soundFile
    const {letter, image, soundFile} = item;
    return (
      <AlphabetComponent
        letter={letter}
        imageSource={image}
        soundFile={soundFile}
        playingSound={playingSound}
        setPlayingSound={setPlayingSound}
      />
    );
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Alphabets'} />
      <FlatList
        data={alphabetData}
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

export default AlphabetsScreen;
