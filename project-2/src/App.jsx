import { stringify } from 'postcss';
import { React, useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  const [input, setInput] = useState('')
  var word;

  useEffect(() => {
    fetch(`https://api.datamuse.com/words?ml=${input}`)
      .then(response => response.json())
      .then(json => setData(json.slice(0, 10)))
      .catch(error => console.error(error));
  }, [input]);


  function handleClick() {
    setInput(word)
  }

  function handleChange(e) {
    word = e.target.value
  }


  return (
    <div className='bg-[#202020] w-screen h-screen flex justify-center items-center gap-4 flex-col'>
      <div className='flex gap-2'>
        <input type="text" onChange={handleChange} className='border-2 border-black rounded-lg p-2' />
        <button onClick={handleClick} className='text-black border-2 p-2 bg-gray-400 rounded-md'>submit</button>
      </div>
      <ul>
        {data.map((item, index) => (
          <li 
          key={index}
          className='text-white cursor-pointer uppercase font-bold hover:shadow-inner hover:shadow-black rounded-lg p-1'
          >{item.word}</li>
        ))}
      </ul>
    </div>
  )
}

export default App