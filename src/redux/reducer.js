import { combineReducers } from '@reduxjs/toolkit';
import boardReducer from './slices/boardSlice';
import todoReducer from './slices/todoSlice';

const rootReducer = combineReducers({
    board: boardReducer,
    todo: todoReducer,
});

export default rootReducer;
