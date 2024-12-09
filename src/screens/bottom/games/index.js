import React from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../../../assets/images';
import ScrollableSelectionList from '../../../components/molecules/selectionContainerList';
import {Strings} from '../../../constants/strings';
import {styles} from './styles';

const GamesScreen = ({navigation}) => {
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.appBarContainer}>
        <FastImage
          source={images.boyAvatar}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.avatarImg}
        />
        <Text style={styles.nameHeading}>{Strings.greetingText}</Text>
      </View>
      <ScrollableSelectionList />
    </ImageBackground>
  );
};
export default GamesScreen;
