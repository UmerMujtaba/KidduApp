import React from "react";
import { View, Text, ImageBackground } from "react-native";
import CustomAppBar from "../../../components/atoms/customAppBar";
import { images } from "../../../assets/images";
import { styles } from "./styles";

const AnimalsScreen = () => {
    return (
        <ImageBackground source={images.backgroundImage} style={styles.container}>
            <CustomAppBar title={'Animals'} />
        </ImageBackground>
    )
}

export default AnimalsScreen