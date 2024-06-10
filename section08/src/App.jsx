import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래연습하기",
    date: new Date().getTime(),
  },
]

function App() {  
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  useEffect(() => {
    console.log("App mounted")
  }, [])

  useEffect(() => {
    console.log("App updated")
  })

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }
    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    // todos state의 값들 중에
    // targetId와 일치하는 id를 갖는 todo 아이템의 isDone 변경

    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          }
        } else {
          return todo;
        }
      })
    );
  }

  const onDelete = (targetId) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id != targetId;
      })
    );
  }
  
  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
