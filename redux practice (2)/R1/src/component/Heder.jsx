import React from 'react'
import { useSelector} from 'react-redux'


function Heder() {
  const color = useSelector(state => state.color.value)
  const count = useSelector(state => state.counter.value)
  return (
    <div>
        <h1 style={{color}} >
        This is the title
        </h1>
        <h3 style={{color}}>The count is - {count}</h3>
    </div>
  )
}
export default Heder