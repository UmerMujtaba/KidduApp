import React from 'react'
import { Image, ImageBackground, StatusBar, Text, View } from 'react-native'
import { styles } from './styles'
import { images } from '../../../assets/images'
import ScrollableSelectionList from '../../../components/molecules/selcetionContainerList'

const HomeScreen = () => {

    return (
        <ImageBackground source={images.backgroundImage} style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={styles.appBarContainer}>
                <Image source={images.boyAvatar} style={styles.avatarImg} />
                <Text style={styles.nameHeading}>Hi, Arya!</Text>
            </View>

            <View style={{ alignItems: "center" }}>
                <ScrollableSelectionList />
            </View>
        </ImageBackground>
    )
}

export default HomeScreen