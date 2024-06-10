import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"

// BrowserRouter -> 브라우저의 현재 주소를 저장하고, 감지하는 역할
// BrowserRouter로 app 컴포넌트를 감싸면, 리액트앱의 모든 컴포넌트들이, 
// 현재 브라우저 주소를 불러와서 쓸 수 있고, 주소의 변화를 감지 가능.
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
