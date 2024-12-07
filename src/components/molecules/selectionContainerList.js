import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import SelectionContainer from '../atoms/selectionContainer';
import {images} from '../../assets/images';
import {ScreenNames} from '../../constants/strings';
import {navigate} from '../../navigationHandler/navigationRef';
import {rhp, rwp} from '../../constants/dimensions';

// Sample data for images and headings
const data = [
  {
    id: 1,
    imageSource: images.alphabets.alphabetsGroup,
    heading: 'Alphabets',
    screen: ScreenNames.alphabetExerciseScreen,
  },
  {
    id: 2,
    imageSource: images.numbers.numbersGroup,
    heading: 'Numbers',
    screen: ScreenNames.numbersExerciseScreen,
  },
  //   { id: 3, imageSource: , heading: "Maths" },
  {
    id: 4,
    imageSource: images.shapes.shapesGroup,
    heading: 'Shapes',
    screen: ScreenNames.shapesExerciseScreen,
  },
  {
    id: 5,
    imageSource: images.animals.animalsGroup,
    heading: 'Animals',
    screen: ScreenNames.animalsExerciseScreen,
  },
  {
    id: 6,
    imageSource: images.games.gamingKidsGroup,
    heading: 'Games',
    screen: ScreenNames.kidsGameExerciseScreen,
  },
];

const ScrollableSelectionList = () => {
  const renderItem = ({item, index}) => (
    <SelectionContainer
      imageSource={item.imageSource}
      heading={item.heading}
      index={index}
      onPress={() => {
        console.log(item);
        navigate(item.screen);
      }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={{
          marginInline: rwp(20),
        }}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: rhp(180),
  },
});

export default ScrollableSelectionList;
