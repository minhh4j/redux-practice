import React from 'react';
import randomColor from 'randomcolor';
import { useSelector, useDispatch } from 'react-redux';
import { change_color } from '../Redux/color/ColorSlice';

function Aside() {

  const color = useSelector(state => state.color.value);
  const dispatch = useDispatch();

  const changeColor = () => {
    dispatch(change_color({ color: randomColor() })); 
  };

  return (
    <div>
      <h2 style={{ color }}>Aside</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Aside;
