import React from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import {navigate} from '../../navigationHandler/navigationRef'; // Your navigation helper
import ExerciseLessonComponent from '../atoms/exerciseLessonComponent'; // Assuming this is your component
import ExerciseSetHeader from '../atoms/exerciseSetHeader'; // Assuming this is your component
import {alphabetData} from '../../utils/alphabetsScreenData'; // Your alphabet data

const ExampleScreen = ({exerciseType}) => {
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
    // Add other cases for numbers, shapes, etc. if necessary
    default:
      headerTitle = 'Exercise Set';
      countText = '0/0';
      subHeading = 'No sets available';
      lessonData = [];
      break;
  }

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 20}}>
      <ExerciseSetHeader
        title={headerTitle}
        count={countText}
        description={subHeading}
      />
      {lessonData.map((lesson, index) => (
        <View style={{alignSelf: 'center'}} key={index}>
          <TouchableOpacity
            onPress={() => {
              console.log('🚀 ~ ExampleScreen ~ lessonData:', lessonData);

              // When a lesson is pressed, navigate to the screen defined in the lesson's data
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
