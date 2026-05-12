
import { useState } from "react"

function App() {

const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"  style = {{backgroundColor: color}}>
  
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 outline-none px-4 py-1 rounded-full " style={{backgroundColor:"white"}}>
          <button onClick = {()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "red"}}>
            Red
          </button>

          <button onClick = {()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "blue"}}>
            Blue
          </button>

          <button onClick = {()=> setColor("green")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "green"}}>
            Green
          </button>

          <button onClick = {()=> setColor("orange")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "orange"}}>
            Orange
          </button>

          <button onClick = {()=> setColor("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "pink"}}>
            Pink
          </button>

          <button onClick = {()=> setColor("lavender")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "lavender"}}>
            Lavender
          </button>

          <button onClick = {()=> setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "white"}}>
            White
          </button>

          <button onClick = {()=> setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "yellow"}}>
            Yellow
          </button>

          <button onClick = {()=> setColor("gray")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "gray"}}>
            Gray
          </button>
      </div>
    </>
  )
}

export default App
