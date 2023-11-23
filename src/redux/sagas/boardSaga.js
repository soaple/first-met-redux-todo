import { takeLeading, delay, put } from 'redux-saga/effects';
import {
    resetBoard,
    resetBoardSagaRequested,
    resetBoardSagaSucceeded,
    resetBoardSagaFailed,
} from '../slices/boardSlice';
import { resetTodo } from '../slices/todoSlice';

function* resetBoardSaga() {
    try {
        yield delay(3000);
        yield put(resetBoard());
        yield put(resetTodo());

        yield put(resetBoardSagaSucceeded('succeeded'));
    } catch (error) {
        yield put(resetBoardSagaFailed(error));
    }
}

export function* saga() {
    yield takeLeading(resetBoardSagaRequested, resetBoardSaga);
}
