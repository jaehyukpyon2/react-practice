import { useEffect, useState } from 'react'
import './App.css'

function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  )
}

//let i = 0;

function App() {
  const [count, setCount] = useState(0);

  // let i = 0; // 무적권 항상 1...

  console.log("---- 1 ----");
  useEffect(() => {
    console.log("mount")
  }, [])

  useEffect(() => {
    console.log("update")
  })

  console.log("---- 2 ----");


  return (
    <>
      <button onClick={() => {
        setCount(count + 1);
        console.log(typeof(count));
      }}>plus count</button>
      <h1>Hello World! - {count}</h1>
    </>
  )
}

export default App
