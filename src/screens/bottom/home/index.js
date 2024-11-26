import React from 'react';
import {ImageBackground, View} from 'react-native';
import {images} from '../../../assets/images';
import CustomAppBar from '../../../components/atoms/customAppBar';
import SoundItemListContainer from '../../../components/molecules/soundItemListContainer';
import {styles} from './styles';

const HomeScreen = () => {
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar title={'Pronunciations'} />

      <View style={styles.body}>
        <SoundItemListContainer />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
