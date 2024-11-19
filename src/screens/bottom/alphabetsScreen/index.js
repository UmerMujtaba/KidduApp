import React from "react";
import { FlatList, ImageBackground } from "react-native";
import { styles } from "./styles";
import { images } from "../../../assets/images";
import CustomAppBar from "../../../components/atoms/customAppBar";
import AlphabetComponent from "../../../components/atoms/alphabetComponent";
import { alphabetImages } from "../../../utils/alphabetsScreenData";

const AlphabetsScreen = () => {

    const renderItem = ({ item }) => {
        console.log('Item letter:', item.letter);
        console.log(`Sound file for ${item.letter}:`, item.soundFile);
        return <AlphabetComponent imageSource={item.image} soundFile={item.soundFile} />;
      };

    return (
        <ImageBackground source={images.backgroundImage} style={styles.container}>
            <CustomAppBar title={'Alphabets'} />
            <FlatList
                data={alphabetImages}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapperStyle}
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false}
            />
        </ImageBackground>
    );
};

export default AlphabetsScreen;
