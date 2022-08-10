import React from 'react';
import counterStyle from './Counter.module.css';

import { increment, decrement } from '../../slice/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counterValue = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncrementButtonClick = () => {
    dispatch(increment());
  };
  const onDecrementButtonClick = () => {
    dispatch(decrement());
  };

  return (
    <div className={counterStyle.counterContainerMain}>
      <div className={counterStyle.counterContainer}>
        <h2 className={counterStyle.counterState}>Counter:{counterValue}</h2>
        <div className={counterStyle.counterButtonContainer}>
          <button
            onClick={onIncrementButtonClick}
            className={counterStyle.counterButton}
          >
            increment
          </button>
          <span className={counterStyle.spaceContainer}></span>
          <button
            onClick={onDecrementButtonClick}
            className={counterStyle.counterButton}
          >
            decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
