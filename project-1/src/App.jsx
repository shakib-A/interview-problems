import { React, useEffect, useState} from 'react'
import './App.css'

const App = () => {

  const [circle, setcircle] = useState([])
  const [backUp, setBackUp] = useState([])

  const handleClick = (event) => {
    const newCircleArray = [
      ...circle,
      {
        x: event.clientX,
        y: event.clientY
      }
    ]
    setcircle(newCircleArray)
    setBackUp(newCircleArray)
  }

  const handleUndo = () => {
   const newCircle = [...circle]
   newCircle.pop()
   setcircle(newCircle)
  }
  
  const handleRedo = () => {
    const newArray = backUp.slice(circle.length)  

    if(newArray[0]) {
      setcircle((prev) => [
        ...prev,
        newArray[0]
        ])
      } else {return}
    }

  const isDisabled = backUp.length === circle.length ? true : false

  return (
    <div className='root'>
      <button onClick={handleUndo} className='btn'>undo</button>
      <button disabled={isDisabled} onClick={handleRedo} className={`btn ${isDisabled ? `disable` : 'redo'}`}>redo</button>
      <div  className='screen' onClick={handleClick}>
        {circle.map((element, index) => (
    <div key={index} style={{
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: '#fff',
      position: 'absolute',
      top: `${element.y}px`,
      left: `${element.x}px`
    }}></div>
  ))}
      </div>
    </div>
  )
}

export default App