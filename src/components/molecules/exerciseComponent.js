import React from 'react';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import {navigate} from '../../navigationHandler/navigationRef'; // Your navigation helper
import ExerciseLessonComponent from '../atoms/exerciseLessonComponent'; // Assuming this is your component
import ExerciseSetHeader from '../atoms/exerciseSetHeader'; // Assuming this is your component
import {alphabetData} from '../../utils/alphabetsScreenData'; // Your alphabet data
import {shapesData} from '../../utils/shapesScreenData';
import {numbersData} from '../../utils/numbersScreenData';
import CustomBottomTab from '../atoms/customBottomTab';

const ExampleScreen = ({exerciseType, Data}) => {
  console.log('🚀 ~ ExampleScreen ~ exerciseType:', exerciseType);
  let headerTitle = '';
  let countText = '';
  let subHeading = '';
  let lessonData = [];

  switch (exerciseType) {
    case 'alphabet':
      headerTitle = 'Alphabets Set';
      countText = '1/26';
      subHeading = '26 sets and letters';
      lessonData = alphabetData;
      break;

    case 'numbers':
      headerTitle = 'Numbers Set';
      countText = '1/26';
      subHeading = '26 exercises';
      lessonData = numbersData;
      break;

    case 'shapes':
      headerTitle = 'Shapes Set';
      countText = '1/26';
      subHeading = '26 exercises';
      lessonData = shapesData;
      break;
    // Add other cases for numbers, shapes, etc. if necessary
    default:
      headerTitle = 'Exercise Set';
      countText = '0/0';
      subHeading = 'No sets available';
      lessonData = [];
      break;
  }

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 100,
      }}>
      <ExerciseSetHeader
        title={headerTitle}
        count={countText}
        description={subHeading}
      />
      {Data &&
        lessonData.map((lesson, index) => (
          <View style={{alignSelf: 'center'}} key={index}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
              }}
              onPress={() => {
                console.log('🚀 ~ ExampleScreen ~ lessonData:', lessonData);

                navigate(lesson.screen, {letterData: lesson});
              }}>
              <ExerciseLessonComponent
                heading={lesson.name}
                subHeading={subHeading}
                imageSource={lesson.image}
                onPress={() => navigate(lesson.screen, {letterData: lesson})}
              />
            </TouchableOpacity>
          </View>
        ))}
    </ScrollView>
  );
};

export default ExampleScreen;
