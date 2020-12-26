import { fork } from 'redux-saga/effects';
import { counterOneWatcher } from './sagas/sagas.counterOne'

export function* rootSaga() {
  yield fork(counterOneWatcher);
}
