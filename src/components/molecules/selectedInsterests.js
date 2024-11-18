import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { images } from '../../assets/images'; // Import the images
import InterestsTouchableComponent from '../atoms/interestsTouchableContainer';
import { InterestsData } from '../../constants/strings';

const InterestsSelection = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemPress = (item) => {
        setSelectedItems((prevSelectedItems) => {
            if (prevSelectedItems.includes(item)) {
                return prevSelectedItems.filter((i) => i !== item);
            } else {
                return [...prevSelectedItems, item];
            }
        });
    };

    const logSelectedItems = () => {
        console.log("Selected Items: ", selectedItems);
    };

    // Data with titles and image sources
    return (
        <View style={styles.container}>
            <FlatList
                data={InterestsData}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <InterestsTouchableComponent
                        title={item.title}
                        imageSource={item.imageSource}
                        onPress={() => {
                            handleItemPress(item.title);
                            logSelectedItems();
                        }}
                        isSelected={selectedItems.includes(item.title)}
                    />
                )}
                contentContainerStyle={styles.scrollContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});

export default InterestsSelection;
