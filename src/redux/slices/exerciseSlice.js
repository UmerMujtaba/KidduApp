// import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//   exerciseType: '', // Tracks the type of exercise (alphabet, numbers, shapes, etc.)
//   currentExerciseIndex: 0,
//   time: 60,
//   isCorrect: null,
//   progressAnim: 0,
//   lessonData: [], // Dynamic lesson data based on the exercise type
// };

// const exerciseSlice = createSlice({
//   name: 'exercise',
//   initialState,
//   reducers: {
//     setExerciseType: (state, action) => {
//       state.exerciseType = action.payload; // Update the exercise type
//     },
//     setLessonData: (state, action) => {
//       state.lessonData = action.payload; // Update lesson data dynamically
//     },
//     setCurrentExerciseIndex: (state, action) => {
//       state.currentExerciseIndex = action.payload;
//     },
//     setTime: (state, action) => {
//       state.time = action.payload;
//     },
//     setIsCorrect: (state, action) => {
//       state.isCorrect = action.payload;
//     },
//     setProgressAnim: (state, action) => {
//       state.progressAnim = action.payload;
//     },
//     resetExerciseState: () => initialState,
//   },
// });

// export const {
//   setExerciseType,
//   setLessonData,
//   setCurrentExerciseIndex,
//   setTime,
//   setIsCorrect,
//   setProgressAnim,
//   resetExerciseState,
// } = exerciseSlice.actions;

// export default exerciseSlice.reducer;
