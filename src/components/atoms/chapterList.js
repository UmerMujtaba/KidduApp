import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { rhp, rwp } from '../../constants/dimensions';
import { colors } from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import RandomChapters from './chapterssList';

const ChapterListContainer = ({ title, imageSource }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0.2, y: 0.3 }}
                end={{ x: 1, y: 1 }}
                colors={[colors.DarkBrown, colors.lightBrown]}
                style={styles.linearGradient}
            >
                <View style={styles.iconContainer}>
                    <Image source={imageSource} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                </View>
                <Text style={styles.textStyle}>{title}</Text>
            </LinearGradient>
            <RandomChapters />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
    },
    iconContainer: {
        // height: rhp(35),
        paddingVertical: rhp(8),
        width: rwp(35),
        backgroundColor: '#694935',
        marginLeft: rwp(15),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    linearGradient: {
        borderRadius: 12,
        paddingVertical: rhp(18),
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: rhp(20),
        shadowColor: "#000", 
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
    },
    textStyle: {
        color: 'white',
        marginLeft: rwp(15),
        fontWeight: "700"
    }
})
export default ChapterListContainer