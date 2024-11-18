import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { HeadingText } from "../../../components/atoms/heading";
import { images } from "../../../assets/images";
import { styles } from "./styles";
import InterestsTouchableComponent from "../../../components/atoms/interestsTouchableContainer";
import InterestsSelection from "../../../components/molecules/selectedInsterests";
import { TouchableButton } from "../../../components/atoms/button";
import { ScreenNames } from "../../../constants/strings";
import { navigate } from "../../../navigationHandler/navigationRef";

const KidsInterestSelectionScreen = () => {
    return (
        <ImageBackground source={images.backgroundImage} style={styles.container} >
            <HeadingText />
            <Text style={styles.nameHeading}>Choose kid interests?</Text>
            <InterestsSelection />
            <TouchableButton title={'Complete'} btnPropStyle={{ marginTop: 20 }}  onPress={()=> navigate('BottomStack', { screen: ScreenNames.homeScreen})}/>
        </ImageBackground>
    )
}


export default KidsInterestSelectionScreen