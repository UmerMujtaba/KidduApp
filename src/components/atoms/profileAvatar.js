import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { rhp, rwp } from "../../constants/dimensions";
import { colors } from "../../constants/colors";


const ProfileRoundedAvatar = ({ imageSource }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.container, { height: rhp(98), backgroundColor: colors.darkOrange, borderTopColor: "orange", borderLeftColor: "orange", borderRightColor: "orange", borderBottomColor: "white", justifyContent: 'center' }]}>
                <Image source={imageSource} style={styles.img} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: rwp(100),
        width: rwp(100),
        borderRadius: rwp(50),
        backgroundColor: colors.blackishOrange,
    },
    img: {
        resizeMode: "contain",
        height: rhp(75),
        width: rwp(75),
        alignSelf: "center"

    }
})
export default ProfileRoundedAvatar