import React from 'react';
import Counter from './Counter';
import Aside from './Aside';1

function Main({ count, setCount  , color , setColor }) {
  return (
    <div>
      <div>
        <Counter/>
        <Aside/>
      </div>
    </div>
  );
}

export default Main;
