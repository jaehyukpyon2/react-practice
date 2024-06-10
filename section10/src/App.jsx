import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useCallback, useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Exam from './components/Exam'
import { useReducer } from 'react'

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

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE':
      return [action.data, ...state];
      break;
    case 'UPDATE':
      return state.map((item) => item.id === action.targetId ? {...item, isDone: !item.isDone} : item);
      break;
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
      break;
    default:
      return state;
  }
}

function App() {  
  // const [todos, setTodos] = useState(mockData);

  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  useEffect(() => {
    console.log("App mounted")
  }, [])

  useEffect(() => {
    console.log("App updated")
  })

  // App 컴포넌트가 re-rendering되면, 이런 onCreate, onUpdate와 같은 함수들도 재생성 돼서, 
  // memo(Component)를 적용했어도 자식 컴포넌트가 re-rendering 된다. 왜? memo는 얕은 비교하는데, 함수가 다시 재생성되면
  // 그 주소값이 달라지기에...
  const onCreate = useCallback((content) => {
    // const newTodo = {
    //   id: idRef.current++,
    //   isDone: false,
    //   content: content,
    //   date: new Date().getTime(),
    // }
    // setTodos([newTodo, ...todos]);

    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content, 
        date: new Date().getTime(),
      }
    })
  }, []);

  const onUpdate = useCallback((targetId) => {
    // todos state의 값들 중에
    // targetId와 일치하는 id를 갖는 todo 아이템의 isDone 변경
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id === targetId) {
    //       return {
    //         ...todo,
    //         isDone: !todo.isDone,
    //       }
    //     } else {
    //       return todo;
    //     }
    //   })
    // );

    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  }, []);

  // const onDelete = (targetId) => {
  //   // setTodos(
  //   //   todos.filter((todo) => {
  //   //     return todo.id != targetId;
  //   //   })
  //   // );
  //   dispatch({
  //     type: "DELETE",
  //     targetId: targetId,
  //   });
  // }

  const onDelete = useCallback((targetId) => {
    // 빈 배열로 설정하면 컴포넌트가 최초로 한 번 rendering 될 때, (mount)될 때 한 번만 실행된다. (그 이후 아무리 많이 re-rendering된다고 해도, 실행 안 된다.) 
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);
  
  return (
    <div className='App'>
      {/* <Exam /> */}

      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
