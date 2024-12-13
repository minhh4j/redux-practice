import React from 'react'
import { useSelector } from 'react-redux'
function Footer() {
  const color = useSelector(state => state.color.value)
  return (
    <div>
        <h1 style={{color}}>Footer</h1>
    </div>
  )
}

export default Footer