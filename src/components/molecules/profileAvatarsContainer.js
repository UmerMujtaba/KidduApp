import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ProfileRoundedAvatar from "../atoms/profileAvatar";
import { images } from "../../assets/images";
import { rfs, rhp, rwp } from "../../constants/dimenssions";
import { colors } from "../../constants/colors";
import fonts from "../../constants/fonts";


const ProfilesAvatarContainer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Creating profile for?</Text>
            <View style={styles.avatarContainer}>
                <TouchableOpacity>
                    <ProfileRoundedAvatar imageSource={images.girlAvatar} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <ProfileRoundedAvatar imageSource={images.boyAvatar} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        marginTop:rhp(30)
    },
    avatarContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingHorizontal: rwp(20)
    },
    heading: {
        fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
        fontSize: rfs(20),
        color: colors.white,
        textAlign: "center",
        marginBottom:rhp(20)
    }
})
export default ProfilesAvatarContainer