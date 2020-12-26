const initialState = {
  counterTwo: 10,
}

export const counterTwo = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_TWO':
      return {
        counterTwo: state.counterTwo + 1,
      }
    case 'DEC_TWO':
      return {
        counterTwo: state.counterTwo - 1,
      }
    case 'INC_NUM_TWO':
      return {
        counterTwo: state.counterTwo + action.payload,
      }
    default:
      return state;
  }
}
