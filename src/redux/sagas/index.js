import { all } from 'redux-saga/effects';
import { saga as boardSaga } from './boardSaga';

export default function* rootSaga() {
    yield all([
        boardSaga()
    ]);
}
