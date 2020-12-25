import { combineReducers } from 'redux';
import  { counterOneReducer } from './reducers/counterOne';

export const createRootReducer = () => combineReducers({
  counterOne: counterOneReducer,
});
