import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { rfs, rhp, rwp, wp } from "../../constants/dimenssions";
import fonts from "../../constants/fonts";
import { colors } from "../../constants/colors";



const SelectionContainer = ({ imageSource, heading, imageStyle, textStyle, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
            <Image source={imageSource} style={[styles.imgStyle, imageStyle]} />
            <Text style={[styles.txtStyle, textStyle]}>{heading}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // height: rhp(180),
        width: wp(80),
        backgroundColor: 'red',
        borderRadius: 40,
        flexDirection: "row",
        marginBottom: rhp(20)
        // alignItems:"center"
    },
    imgStyle: {
        resizeMode: "cover",
        height: rhp(180),
        width: rwp(260),
        borderRadius: 40
    },
    txtStyle: {
        fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
        fontSize: rfs(24),
        color: colors.white,
        transform: [{ rotate: '90deg' }],
        position: 'absolute',
        right: '-5%',
        top: '42%',


    }
})
export default SelectionContainer