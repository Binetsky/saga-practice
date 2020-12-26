import React from 'react';
import { connect } from 'react-redux';

import { store } from './redux/configureStore'
import { actions } from './redux/reducers/counterOne'
import './App.css';
import { CounterOne } from './CounterOne';

const mapStateToProps = (state) => {
  return {
    counter: state.counterOne.counterOne
  }
};

export const App = connect(mapStateToProps)((props) => {
  const { counter } = props;

  return (
    <div className="App">
      <CounterOne
          onIncrement={() => store.dispatch(actions.incrementState())}
          onDecrement={() => store.dispatch(actions.decrementState())}
          onIncrementNum={(num) => store.dispatch(actions.incrementStateNum(num))}
          value={counter}
      />
    </div>
  );
});

