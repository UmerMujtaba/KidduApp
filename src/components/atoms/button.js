import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { hp, rfs, rhp, rwp, wp } from "../../constants/dimensions";
import fonts from "../../constants/fonts";
import { colors } from "../../constants/colors";



export const TouchableButton = ({ onPress, title, btnPropStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btnStyle, btnPropStyle]}>
            <View style={[styles.btnStyle, { height: rhp(44), backgroundColor: colors.darkOrange, borderTopColor: "orange", borderLeftColor: "orange", borderRightColor: "orange", borderBottomColor: "white", justifyContent: 'center' }]}>

                <Text style={styles.btnText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        width: wp(90),
        backgroundColor: colors.blackishOrange,
        height: rhp(50),
        alignSelf: 'center',
        borderRadius: 16,
        // justifyContent: 'center'
    },
    btnText: {
        textAlign: 'center',
        fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
        fontSize: rfs(20),
        color: colors.white
    }
})