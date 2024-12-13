import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const color = useSelector(state => state.color.value )
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{color}}>Counter</h1>
      <h3 style={{color}}>The Counter Is - {count}</h3>
      <button onClick={() => dispatch(increment())}  style={{backgroundColor:color}}>Increment</button>
      <button onClick={() => dispatch(decrement())} style={{backgroundColor:color}}>Decrement</button>
    </div>
  );
}

export default Counter;
