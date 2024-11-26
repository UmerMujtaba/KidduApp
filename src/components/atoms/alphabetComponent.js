import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';
import {colors} from '../../constants/colors';
import {rhp, rwp} from '../../constants/dimensions';

Sound.setCategory('Playback');

const AlphabetComponent = ({letter, imageSource, soundFile}) => {
  const [sound, setSound] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    if (sound) {
      sound.play(success => {
        if (success) {
          console.log(`Playback finished successfully for ${letter}`);
        } else {
          console.error('Playback failed due to audio decoding errors');
        }
      });
    } else {
      console.error(`No sound loaded for letter ${letter}`);
    }
  };

  if (isLoading) {
    <ActivityIndicator size={'large'} color={colors.backgroundClr} />;
  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
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
        onPress={playPause}>
        <Image source={imageSource} style={styles.img} />
      </TouchableOpacity>
    </TouchableOpacity>
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
});

export default AlphabetComponent;
