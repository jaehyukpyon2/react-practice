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

const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 2,
    content: "1번 일기 내용",
  },
]

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [
        action.data,
        ...state,
      ];
    case "UPDATE":
      return state.map((item) => 
        String(item.id) === String(action.data.id) 
        ? action.data : item);
    case "DELETE":
      return state.filter((item) => String(item.id) != String(action.id));
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  useEffect(() => {
    console.log("App mounted...")
  }, []);
  useEffect(() => {
    console.log("App updated...")
  });
  const onClickAppJsx = () => {
    console.log(mockData === data);
    setCount(count + 1);
  }

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        createdDate,
        emotionId,
        content,
      },
    });
  } 

  // 기존 일기 삭제
  const onDelete = (emotionId) => {
    dispatch({
      type: "DELETE",
    });
  }

  // 기존 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content,
      }
    })
  }

  return (
    <>
      <h4>App.jsx - {count}</h4>
      <button
        onClick={onClickAppJsx}
      >App.jsx click</button>
      <Link to="/new">new</Link>
      <Link to="/diary/10">diary/10</Link>
      <Link to="/">/</Link>

      {/* <Header 
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        // rightChild={{button: <Button text={"Right"} />}} 
        rightChild={<Button text={"Right"} />}
      /> */}

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete,}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/diary/:id' element={<Diary />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App;
