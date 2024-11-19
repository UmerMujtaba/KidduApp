import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { rfs, rhp, rwp, wp } from "../../constants/dimensions";
import { colors } from "../../constants/colors";
import { images } from "../../assets/images";
import fonts from "../../constants/fonts";
import { useNavigation } from "@react-navigation/native";


const CustomAppBar = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
           <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.goBack()}>
                <View style={[styles.btnStyle, { height: rhp(44), backgroundColor: colors.darkOrange, borderTopColor: "orange", borderLeftColor: "orange", borderRightColor: "orange", borderBottomColor: "white", justifyContent: 'center' }]}>
                    <Image source={images.icons.backIcon} style={styles.backIconStyle} />
                </View>
            </TouchableOpacity>
            <Text style={styles.textHeading}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: rhp(10),
        marginTop: rhp(20),
        width: wp(58),
        alignItems: "center",
        justifyContent: "space-between",
    },
    btnStyle: {
        width: rwp(45),
        backgroundColor: colors.blackishOrange,
        height: rhp(50),
        alignSelf: 'center',
        borderRadius: 16,
    },
    backIconStyle: {
        resizeMode: 'contain',
        height: rhp(20),
        width: rwp(20),
        alignSelf: "center"
    },
    textHeading: {
        fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
        color: colors.white,
        fontSize: rfs(22)
    }
})

export default CustomAppBar;