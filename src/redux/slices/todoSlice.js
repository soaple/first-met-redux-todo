import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    boardTodosMap: {},
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const { boardId: targetBoardId, todo: newTodo } = action.payload;

            if (!state.boardTodosMap[targetBoardId]) {
                state.boardTodosMap[targetBoardId] = [];
            }

            state.boardTodosMap[targetBoardId].push({
                id: state.boardTodosMap[targetBoardId].length + 1,
                title: newTodo,
                isFinished: false,
            });
        },
        toggleFinishTodo: (state, action) => {
            const { boardId: targetBoardId, todoId: targetTodoId } =
                action.payload;

            const targetTodo = state.boardTodosMap[targetBoardId].find(
                (todo) => {
                    return todo.id === targetTodoId;
                }
            );

            targetTodo.isFinished = !targetTodo.isFinished;
        },
        deleteTodo: (state, action) => {
            const { boardId: targetBoardId, todoId: targetTodoId } =
                action.payload;

            state.boardTodosMap[targetBoardId] = state.boardTodosMap[
                targetBoardId
            ].filter((todo) => {
                return todo.id !== targetTodoId;
            });
        },
        deleteBoardTodos: (state, action) => {
            const targetBoardId = action.payload;

            delete state.boardTodosMap[targetBoardId];
        },
        resetTodo: () => {
            return initialState;
        },
    },
});

export const {
    addTodo,
    toggleFinishTodo,
    deleteTodo,
    deleteBoardTodos,
    resetTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
