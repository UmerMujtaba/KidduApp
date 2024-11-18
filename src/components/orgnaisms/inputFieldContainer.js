import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InputField from '../molecules/inputField'
import { rhp, rwp } from '../../constants/dimenssions'


const InputFieldContainer = () => {

    return (
        <View style={styles.container}>
            <InputField heading={'Name'} keyboardType={'default'}/>
            <InputField  heading={'Phone Number'} keyboardType={'numeric'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       paddingHorizontal:rwp(20),
       marginTop: rhp(40)
    }
})
export default InputFieldContainer