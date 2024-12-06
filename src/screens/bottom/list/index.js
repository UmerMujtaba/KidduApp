// import React from 'react'
// import { View } from 'react-native'
// import { styles } from './styles'

// const ListsScreen = () => {

//     return (
//         <View style={{ flex: 1, backgroundColor: "red" }}>

//         </View>
//     )
// }
// export default ListsScreen

import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width} = Dimensions.get('window');
const ITEM_WIDTH = 60;
const SPACER_WIDTH = (width - ITEM_WIDTH) / 2;
const ListsScreen = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const flatListRef = useRef(null);
  const data = [
    {key: 'spacer-left'},
    ...Array.from({length: 20}, (_, i) => ({number: i + 1})),
    {key: 'spacer-right'},
  ];
  const scrollToIndex = index => {
    const validIndex = Math.max(1, Math.min(index, data.length - 2));
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: validIndex,
        viewPosition: 0.5,
      });
    }
    setSelectedNumber(data[validIndex]?.number || 1);
  };
  const handleMomentumScrollEnd = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);
    scrollToIndex(index);
  };
  return (
    <View style={styles.container}>
      <View style={{height: 100, marginTop: 100, alignItems: 'center'}}>
        <FlatList
          ref={flatListRef}
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          contentContainerStyle={{paddingHorizontal: SPACER_WIDTH}}
          keyExtractor={(item, index) =>
            item.number?.toString() || `spacer-${index}`
          }
          renderItem={({item, index}) => {
            if (item.key) return <View style={{width: ITEM_WIDTH}} />;
            const isSelected = item.number === selectedNumber;
            return (
              <TouchableOpacity
                onPress={() => scrollToIndex(index)}
                style={[styles.item, isSelected && styles.selectedItem]}>
                <Text style={[styles.text, isSelected && styles.selectedText]}>
                  {item.number}
                </Text>
              </TouchableOpacity>
            );
          }}
          onMomentumScrollEnd={handleMomentumScrollEnd}
        />
        <Text style={styles.selectedTextDisplay}>
          Selected: {selectedNumber}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: '#add8e6',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  selectedText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  selectedTextDisplay: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default ListsScreen;
