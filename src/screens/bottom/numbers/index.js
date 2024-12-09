import React, {useEffect, useState} from 'react';
import {FlatList, ImageBackground} from 'react-native';
import {images} from '../../../assets/images';
import AlphabetComponent from '../../../components/atoms/alphabetComponent';
import CustomAppBar from '../../../components/atoms/customAppBar';
import {useLoaderProvider} from '../../../contextAPI';
import {numbersData} from '../../../utils/numbersScreenData';
import {styles} from './styles';

const NumbersScreen = () => {
  const [playingSound, setPlayingSound] = useState(null);
  const {setLoader} = useLoaderProvider();
  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
    }, 1000);

    return () => setLoader(false);
  }, [setLoader]);
  const renderItem = ({item}) => {
    console.log('🚀 ~ renderItem ~ item:', item);

    const {letter, image, soundFile} = item;

    return (
      <AlphabetComponent
        letter={letter}
        URI={image}
        soundFile={soundFile}
        playingSound={playingSound}
        setPlayingSound={setPlayingSound}
      />
    );
  };
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Numbers'} />
      <FlatList
        data={numbersData}
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

export default NumbersScreen;
