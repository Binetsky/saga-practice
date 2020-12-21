import { put, takeEvery, all, call } from 'redux-saga/effects';

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* helloSaga() {
  console.log('Hello Sagas!')
}

// Сага воркер выполнит асинхронную задачу инкрементации
export function* incrementAsync() {
  // Используем эффект call
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

// Сага вотчер создаст новую incrementAsync задачу на каждый INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// Одна точка входа для старта всех саг за раз
export default function* rootSaga() {
  yield all([
      helloSaga(),
      watchIncrementAsync(),
  ])
}
