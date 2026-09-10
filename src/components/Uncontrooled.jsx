import React from 'react'

function Uncontrooled() {
  return (
    <div className='m-2 p-2 border border-sky-700' onClick={() =>console.log("parent clicked")}>

        <button className='m-2 p-2 border border-amber-700 bg-blue-600' onClick={(e) =>console.log("button clicked")
        }>Button</button>
    Secound</div>
  )
}

export default Uncontrooled