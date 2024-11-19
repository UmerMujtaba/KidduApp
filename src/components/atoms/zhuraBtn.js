import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { rfs, rhp, wp } from '../../constants/dimensions';
import { colors } from '../../constants/colors';

const GradientButton = ({ onPress, buttonText, style }) => (
    <TouchableOpacity style={[styles.ctaStart, style]} onPress={onPress}>
        <LinearGradient
            start={{ x: 0.2, y: 0.3 }}  
            end={{ x: 1, y: 1 }}     
            colors={[colors.DarkBrown, colors.lightBrown]}
            style={styles.linearGradient}
        >
            
            <Text style={styles.buttonText}>{buttonText}</Text>
        </LinearGradient>

    </TouchableOpacity>
);


const styles = StyleSheet.create({
    ctaStart: {
        marginTop: rhp(40),
        width: wp(40),
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: rfs(16),
        textAlign: 'center',
    },
    linearGradient: {
        borderRadius: 36,
        justifyContent: 'center',
        alignItems: 'center',
        height: rhp(60),
    },
})

export default GradientButton