import { createReducer, createAction } from 'redux-act';

const increment = 'INC';
const decrement = 'DEC';
const incrementNum = 'INC_NUM';

const incrementState = createAction(increment);
const decrementState = createAction(decrement);
const incrementStateNum = createAction(incrementNum);

const initialState = {
  counterOne: 0,
};

const toIncrementState = (state) => ({
  counterOne: state.counterOne + 1,
});
const toDecrementState = (state) => ({
  counterOne: state.counterOne - 1,
});
const toIncrementNumState = (state, payload) => ({
  counterOne: state.counterOne + payload,
});

export const counterOneReducer = createReducer({
  [incrementState]: toIncrementState,
  [decrementState]: toDecrementState,
  [incrementStateNum]: toIncrementNumState,
}, initialState);

export const actions ={
  incrementState,
  decrementState,
  incrementStateNum,
};
