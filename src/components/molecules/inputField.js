import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomTextInput from '../atoms/customTextInput'
import fonts from '../../constants/fonts'
import { rfs, rhp } from '../../constants/dimensions'
import { colors } from '../../constants/colors'


const InputField = ({ heading, keyboardType }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
            <CustomTextInput
                keyboardType={keyboardType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
        fontSize: rfs(20),
        color: colors.headingColor,

    }
})
export default InputField