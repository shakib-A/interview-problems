import { stringify } from 'postcss';
import { React, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

 function fetchDate() {
  setIsLoading(true)
  fetch(`https://api.datamuse.com/words?ml=${input}`)
    .then(response => response.json())
    .then(json => {
      setData(json.slice(0, 10))
      setIsLoading(false)
    })
    .catch(error => console.error(error));
 }

  function handleClick() {
    fetchDate()
  }

  function handleChange(e) {
    var word = e.target.value
    setInput(word)
  }
  
  function handleListItem(itemWord) {
    setInput(itemWord)
  }
  


  return (
    <div className='bg-[#202020] w-screen h-screen flex justify-center items-center gap-4 flex-col'>
      <div className='flex gap-2'>
        <input type="text" value={input} onChange={handleChange} className='border-2 border-black rounded-lg p-2'></input>
        <button onClick={handleClick} className='text-black border-2 p-2 bg-gray-400 rounded-md'>submit</button>
      </div>
      <ul>
        {isLoading 
        ? <div className='text-white'>loading...</div> 
        : data.map((item, index) => (
          <li 
          key={index}
          className='text-white cursor-pointer uppercase font-bold hover:shadow-inner hover:shadow-black rounded-lg p-1'
          onClick={() => {handleListItem(item.word)}}
          >{item.word}</li>
        ))}
      </ul>
    </div>
  )
}

export default App