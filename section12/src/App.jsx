import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import Notfound from './pages/Notfound'

// 1. / -> 모든 일기를 조회하는 홈페이지
// 2. /new -> 새로운 일기를 작성하는 new page
// 3. /diary -> 일기를 상세히 조회하는 diary 페이지
// 각각의 페이지 역할을 할 컴포넌트들이 필요 (pages 폴더 안...)
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }

  return (
    <>
    <div>
      <Link to={"/"}>Goto Home!</Link><br />
      <Link to={"/new"}>Goto new!</Link><br />
      <Link to={"/diary"}>Goto diary!</Link><br />
    </div>
    <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
