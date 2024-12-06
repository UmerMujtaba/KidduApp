import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MotionSlider from 'react-native-motion-slider'; // Importing MotionSlider
import {rfs, rhp} from '../../constants/dimensions'; // Assuming you have these constants
import {colors} from '../../constants/colors'; // Assuming you have this
import fonts from '../../constants/fonts'; // Assuming you have this

const HorizontalNumberList = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Sample data

  // Handle item press (manual selection)
  const handleItemPress = index => {
    setSelectedIndex(index);
  };

  // Handle slider value change to determine selected index
  const handleSliderChange = value => {
    const index = Math.round(value);
    setSelectedIndex(index);
  };

  // Render each item
  const renderItem = (item, index) => (
    <TouchableOpacity
      onPress={() => handleItemPress(index)}
      style={[
        styles.itemContainer,
        selectedIndex === index && styles.selectedItemContainer,
      ]}>
      <Text
        style={[
          styles.itemText,
          selectedIndex === index && styles.selectedItemText,
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* <MotionSlider
        values={data}
        renderItem={renderItem} // Render each item
        minimumValue={0} // Set minimum value
        maximumValue={data.length - 1} // Set maximum value based on data length
        step={1} // Set step value to ensure the slider moves by one item at a time
        style={styles.slider}
        onValueChange={handleSliderChange} // Update the selected index when the slider value changes
        selectedValue={selectedIndex} // Pass the selected index to highlight the selected item
        showLabels={false} // Optionally hide labels
        snapToItem // Snap to the closest item for smooth scrolling
      /> */}
      <MotionSlider
        min={8}
        max={80}
        value={selectedIndex}
        decimalPlaces={0}
        units={''}
        backgroundColor={[
          'rgb(3, 169, 244)',
          'rgb(255, 152, 0)',
          'rgb(255, 87, 34)',
        ]}
        onValueChanged={value => setSelectedIndex(value)}
        onPressIn={() => console.log('Pressed in')}
        onPressOut={() => console.log('Pressed out')}
        onDrag={() => console.log('Dragging')}
      />
      <Text style={styles.centeredText}>{selectedIndex}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '100%', // Set slider width as required
    height: rhp(100), // Set height as per item size
    paddingHorizontal: 20,
  },
  itemContainer: {
    marginHorizontal: 10,
    width: rhp(80),
    height: rhp(80),
    borderRadius: rhp(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  selectedItemContainer: {
    backgroundColor: colors.gradientColor1, // Color for selected item
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
  centeredText: {
    // backgroundColor: 'red',
    marginTop: 20,
    fontSize: rfs(24),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.headingColor,
  },
});

export default HorizontalNumberList;

// import React, {useState, useRef} from 'react';
// import {Text, View, StyleSheet} from 'react-native';
// import Picker from 'react-native-picker-horizontal'; // assuming you're using this picker

// const Items = Array.from(Array(30).keys()); // 30 items
// const itemWidth = 50;

// const HorizontalNumberList = () => {
//   const [selected, setSelected] = useState(2); // Set initial selected value to index 2
//   const pickerRef = useRef(null); // Reference to the Picker component

//   // Handle value change when a new item is selected
//   const handleItemChange = newValue => {
//     setSelected(newValue);
//   };

//   // Handles when scrolling ends and updates the selected item based on scroll position
//   const handleMomentumScrollEnd = event => {
//     const contentOffsetX = event.nativeEvent.contentOffset.x;
//     const index = Math.floor(contentOffsetX / itemWidth);
//     setSelected(index); // Update the selected item based on the scroll position
//   };

//   const renderItem = (item, index) => (
//     <Text
//       style={[
//         styles.item,
//         selected === index && styles.selectedItem, // Highlight selected item
//       ]}>
//       {item}
//     </Text>
//   );

//   return (
//     <View>
//       <Picker
//         ref={pickerRef}
//         data={Items}
//         renderItem={renderItem} // Custom rendering of each item
//         itemWidth={itemWidth}
//         initialIndex={selected}
//         onChange={handleItemChange} // Handle change when item is selected
//         onMomentumScrollEnd={handleMomentumScrollEnd} // Handle scroll end
//         showsHorizontalScrollIndicator={false}
//         style={styles.picker}
//       />
//       <Text style={styles.selectedText}>Selected Item: {selected + 1}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   picker: {
//     paddingHorizontal: 10,
//   },
//   item: {
//     width: itemWidth,
//     textAlign: 'center',
//     lineHeight: itemWidth, // Center text vertically
//     fontSize: 20,
//     color: 'black',
//   },
//   selectedItem: {
//     color: 'blue', // Highlight selected item with blue color
//     fontWeight: 'bold',
//   },
//   selectedText: {
//     marginTop: 20,
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default HorizontalNumberList;
