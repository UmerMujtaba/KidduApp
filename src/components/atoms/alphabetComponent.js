import React, { useEffect } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { images } from "../../assets/images";
import { rfs, rhp, rwp, wp } from '../../constants/dimensions';
import { colors } from '../../constants/colors';
var Sound = require('react-native-sound');

Sound.setCategory('Playback');

const AlphabetComponent = ({ imageSource, soundFile }) => {
    let ding;

    useEffect(() => {
        ding = new Sound(soundFile, (error) => {
            if (error) {
                console.error('Failed to load the sound', error);
                return;
            }
            console.log(
                `Loaded sound file. Duration: ${ding.getDuration()}s, Channels: ${ding.getNumberOfChannels()}`
            );
        });

        return () => {
            if (ding) {
                ding.release();
            }
        };
    }, [soundFile]);

    const playPause = () => {
        if (ding) {
            ding.play((success) => {
                if (success) {
                    console.log('Playback finished successfully');
                } else {
                    console.error('Playback failed due to audio decoding errors');
                }
            });
        }
    };

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <TouchableOpacity style={[styles.container, { height: rhp(150), backgroundColor: colors.secondary, borderTopColor: "orange", borderLeftColor: "orange", borderRightColor: "orange", borderBottomColor: "white", justifyContent: 'center' }]} activeOpacity={0.7} onPress={playPause} >
                <Image source={imageSource} style={styles.img} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        height: rhp(160),
        width: rwp(158),
        backgroundColor: colors.secondary,
        borderRadius: 12
    },
    img: {
        resizeMode: "cover",
        height: rhp(160),
        width: rwp(155),
        borderRadius: 12

    }
})
export default AlphabetComponent;