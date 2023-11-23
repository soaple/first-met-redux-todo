import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteBoard, selectBoard } from '../slices/boardSlice';
import { deleteBoardTodos } from '../slices/todoSlice';

const deleteBoardThunk = createAsyncThunk(
    'board/deleteBoard',
    async (boardId, thunkApi) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const rootState = thunkApi.getState();
                const { selectedBoardId } = rootState.board;

                if (selectedBoardId === Number(boardId)) {
                    thunkApi.dispatch(selectBoard(null));
                }

                thunkApi.dispatch(deleteBoard(boardId));
                thunkApi.dispatch(deleteBoardTodos(boardId));

                resolve();
            }, 3000);
        });
    }
);

export default deleteBoardThunk;
