import React from 'react'
import { Image, ImageBackground, View } from 'react-native'
import { styles } from './styles'
import { HeadingText } from '../../../components/atoms/heading'
import InputFieldContainer from '../../../components/orgnaisms/inputFieldContainer'
import { TouchableButton } from '../../../components/atoms/button'
import { rhp } from '../../../constants/dimenssions'
import { images } from '../../../assets/images'
import { navigate } from '../../../navigationHandler/navigationRef'
import { ScreenNames } from '../../../constants/strings'


const SignUpScreen = () => {

    return (
        // <View style={styles.container}>
              <ImageBackground source={images.backgroundImage} style={styles.container} >
            <HeadingText />
            <InputFieldContainer />
            <TouchableButton title={'Send OTP'} btnPropStyle={{ marginTop: rhp(20) }} onPress={() => navigate(ScreenNames.otpScreen)} />
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Image source={images.cubImage} style={styles.imgStyle} />
            </View>
        {/* </View> */}
        </ImageBackground>
    )
}
export default SignUpScreen