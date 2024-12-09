import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Sound from 'react-native-sound';
import {images} from '../../assets/images';
import {colors} from '../../constants/colors';
import {rhp, rwp} from '../../constants/dimensions';

Sound.setCategory('Playback');

const AlphabetComponent = ({
  letter,
  soundFile,
  URI,
  playingSound,
  setPlayingSound,
  onPress,
}) => {
  const [sound, setSound] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadSound = () => {
      setIsLoading(true);
      const s = new Sound(soundFile, '', error => {
        if (error) {
          console.error('Failed to load sound:', error);
          setIsLoading(false);
        } else {
          console.log(`Loaded sound for letter ${letter}`);
          setSound(s);
          setIsLoading(false);
        }
      });
    };

    loadSound();

    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, [letter, soundFile]);

  const playPause = () => {
    if (isPlaying) {
      console.log('Sound is already playing. Please wait for it to finish.');
      return;
    }

    if (playingSound && playingSound !== letter) {
      console.log('Another sound is already playing. Please wait.');
      return;
    }

    if (sound) {
      setIsPlaying(true);
      setPlayingSound(letter);
      sound.play(success => {
        if (success) {
          console.log(`Playback finished successfully for ${letter}`);
        } else {
          console.error('Playback failed due to audio decoding errors');
        }
        setIsPlaying(false);
        setPlayingSound(null);
      });
    } else {
      console.error(`No sound loaded for letter ${letter}`);
    }
  };

  if (isLoading) {
    return <ActivityIndicator size={'large'} color={colors.backgroundClr} />;
  }

  return (
    <View
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress || playPause}>
      <TouchableOpacity
        style={[
          styles.container,
          {
            height: rhp(150),
            backgroundColor: colors.secondary,
            borderTopColor: 'orange',
            borderLeftColor: 'orange',
            borderRightColor: 'orange',
            borderBottomColor: 'white',
            justifyContent: 'center',
          },
        ]}
        activeOpacity={0.7}
        onPress={onPress || playPause}>
        <FastImage
          defaultSource={images.defaultImg}
          source={{uri: URI}}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.img}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: rhp(160),
    width: rwp(158),
    backgroundColor: colors.secondary,
    borderRadius: 12,
  },
  img: {
    resizeMode: 'cover',
    height: rhp(160),
    width: rwp(155),
    borderRadius: 12,
  },
  imgURI: {
    position: 'absolute',
    // resizeMode: 'cover',
    top: 5,
    height: rhp(150),
    width: rwp(158),
    alignSelf: 'center',
    borderRadius: 12,
  },
});

export default AlphabetComponent;
