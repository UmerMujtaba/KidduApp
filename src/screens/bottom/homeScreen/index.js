import React from 'react'
import { Image, ImageBackground, StatusBar, Text, View } from 'react-native'
import { styles } from './styles'
import { images } from '../../../assets/images'
import ScrollableSelectionList from '../../../components/molecules/selectionContainerList'
import { Strings } from '../../../constants/strings'

const HomeScreen = () => {

    return (
        <ImageBackground source={images.backgroundImage} style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={styles.appBarContainer}>
                <Image source={images.boyAvatar} style={styles.avatarImg} />
                <Text style={styles.nameHeading}>{Strings.greetingText}</Text>
            </View>

            <View style={{ alignItems: "center" }}>
                <ScrollableSelectionList />
            </View>
        </ImageBackground>
    )
}

export default HomeScreen