import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

let [counter, setCounter] = useState(15)

//let counter = 15

let addValue = () =>{
  if(counter < 20)
  {
    counter = counter + 1
    setCounter(counter)
  }
  else return
  
}

let removeValue = () =>{
  if(counter > 0)
  {
    counter = counter - 1
    setCounter(counter)
  }else return
  
}
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <footer>Foot: {counter}</footer>
    </>
  )
}

export default App
