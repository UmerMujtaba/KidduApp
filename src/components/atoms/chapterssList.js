import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { images } from '../../assets/images';
import { rfs, rhp, rwp } from '../../constants/dimensions';
import SectionItem from './sectionItem';

const chaptersData = [
    { id: '1', title: 'Chapter 01', items: ['Sample.pdf', 'Sample.pdf', '488.pdf'] , },
    { id: '2', title: 'Chapter 02', items: ['Sample.pdf', 'Sample.pdf'] },
    { id: '3', title: 'Chapter 03', items: ['Sample.pdf'] },
];

const RandomChapters = () => {
    const [expandedChapters, setExpandedChapters] = useState({});

    const toggleExpand = (id) => {
        setExpandedChapters((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const renderChapterItem = ({ item }) => {
        return (
            <View style={styles.chapterContainer}>
                <TouchableOpacity
                    onPress={() => toggleExpand(item.id)}
                    style={styles.chapterHeader}
                >
                    <Text style={styles.chapterTitle}>{item.title}</Text>
                    <Image
                        source={images.alphabets.a}
                        style={styles.containerIcon}
                    />
                </TouchableOpacity>
                {expandedChapters[item.id] && (
                    <View style={styles.sectionContainer}>
                        {item.items.map((sectionItem, index) => (
                            <SectionItem key={index} title={sectionItem} leftTitle={'Download'} />

                        ))}
                    </View>
                )}
            </View>
        );
    };

    return (
        <FlatList
            data={chaptersData}
            keyExtractor={(item) => item.id}
            renderItem={renderChapterItem}
            contentContainerStyle={{ paddingBottom: 200, backgroundColor: "red" }}
        />
    );
};

const styles = StyleSheet.create({
    chapterContainer: {
        // marginVertical: rhp(5),
    },
    chapterHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: rhp(10),
    },
    chapterTitle: {
        fontSize: rfs(18),
        // fontWeight: 'bold',
        color: '#401903'
    },
    dropdownIcon: {
        width: rwp(20),
        height: rhp(20),
    },
    sectionContainer: {
        paddingTop: rhp(10),
    },

    containerIcon: {
        width: rwp(16),
        height: rhp(16),
    },
});

export default RandomChapters;
