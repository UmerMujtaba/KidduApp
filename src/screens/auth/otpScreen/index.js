import React from 'react'
import { Image, ImageBackground, View } from 'react-native'
import { styles } from './styles'
import { HeadingText } from '../../../components/atoms/heading'
import OtpFieldContainer from '../../../components/molecules/codeFieldContainer'
import { TouchableButton } from '../../../components/atoms/button'
import TimerContainer from '../../../components/molecules/timerRowContainer'
import { images } from '../../../assets/images'
import { navigate } from '../../../navigationHandler/navigationRef'
import { ScreenNames } from '../../../constants/strings'

const OtPScreen = () => {

    return (
        //  <View style={styles.container}>
        <ImageBackground source={images.backgroundImage} style={styles.container} >
            <HeadingText />
            <OtpFieldContainer />
            <TouchableButton title={'Verify'} btnPropStyle={{ marginTop: 40 }} onPress={()=>navigate(ScreenNames.profile)} />
            <TimerContainer />
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Image source={images.cubImage} style={styles.imgStyle} />
            </View>
            {/* </View> */}
        </ImageBackground>
    )
}

export default OtPScreen