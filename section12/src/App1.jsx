import { useEffect, useState, memo, useReducer, useRef, createContext } from 'react'
import './App.css'
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import {Routes, Route, Link} from 'react-router-dom'
import Notfound from './pages/Notfound'
import Edit from './pages/Edit'

// 1. / -> 모든 일기를 조회하는 홈페이지
// 2. /new -> 새로운 일기를 작성하는 new page
// 3. /diary -> 일기를 상세히 조회하는 diary 페이지
// 각각의 페이지 역할을 할 컴포넌트들이 필요 (pages 폴더 안...)
console.log("App.jsx top!")

function App() {
  const [count, setCount] = useState(0);
  const idRef = useRef(3);

  useEffect(() => {
    console.log("App mounted!!")
  }, [])

  useEffect(() => {
    console.log("App updated!!")
  })

  const onClickAppJsx = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h4>App.jsx - {count}</h4>
      <button
        onClick={onClickAppJsx}
      >App.jsx click</button>
      <Link to="/new">new</Link><br />
      <Link to="/diary/10">diary/10</Link><br />
      <Link to="/">/</Link><br />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/diary/:id' element={<Diary />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
    </>
  )
}

export default App;
