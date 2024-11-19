import React, { useState, useRef } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { rfs, rhp } from '../../constants/dimensions';
import { colors } from '../../constants/colors';
import fonts from '../../constants/fonts';

const HorizontalNumberList = () => {
    const [selectedIndex, setSelectedIndex] = useState(2);
    const flatListRef = useRef(null);

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Centers item when manually selected
    const handleItemPress = (index) => {
        setSelectedIndex(index);
        flatListRef.current.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5, // Centers the selected item
        });
    };

    // Handles item selection when scrolling stops
    const handleMomentumScrollEnd = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / rhp(80)); // Assuming item width equals rhp(80)
        setSelectedIndex(index);

        // Optional: Recenters the selected item to ensure consistent centering
        flatListRef.current.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5,
        });
    };

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => handleItemPress(index)}
            style={[
                styles.itemContainer,
                selectedIndex === index && styles.selectedItemContainer,
            ]}
        >
            <Text
                style={[
                    styles.itemText,
                    selectedIndex === index && styles.selectedItemText,
                ]}
            >
                {item}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={data}
                horizontal
                keyExtractor={(item) => item.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
                showsHorizontalScrollIndicator={false}
                initialScrollIndex={selectedIndex}
                getItemLayout={(data, index) => ({
                    length: rhp(80),
                    offset: rhp(80) * index,
                    index,
                })}
                onMomentumScrollEnd={handleMomentumScrollEnd}
                snapToInterval={rhp(80)} // Ensures snapping to the item width
                decelerationRate="fast"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        paddingHorizontal: 20,
    },
    itemContainer: {
        marginHorizontal: 10,
        width: rhp(80),
        height: rhp(80),
        borderRadius: rhp(40),
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedItemContainer: {
        backgroundColor: colors.gradientColor1,
        height: rhp(80),
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        fontSize: rfs(26),
        color: '#B39DDB',
        fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    },
    selectedItemText: {
        color: '#FFFFFF',
        fontFamily: fonts.SF_PRO_TEXT.Fredoka.CondensedBold,
        fontSize: rfs(50),
    },
});

export default HorizontalNumberList;
