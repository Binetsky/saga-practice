import { all, takeLatest } from 'redux-saga/effects';
import { actions } from '../reducers/counterOne'

export function* increment() {
  yield console.log('INC');
}

export function* decrement() {
  yield console.log('DEC');
}

export function* incrementNum() {
  yield console.log('INC_NUM');
}

export function* counterOneWatcher() {
  yield all([
      takeLatest(actions.incrementState, increment),
      takeLatest(actions.decrementState, decrement),
      takeLatest(actions.incrementStateNum, incrementNum),
  ]);
}
