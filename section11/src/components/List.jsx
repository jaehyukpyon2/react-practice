import React from 'react';
import './List.css'
import TodoItem from './TodoItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo, useContext } from 'react';
import { TodoContext } from '../App';
import { useRef } from 'react';

const List = () => {
  const {todos} = useContext(TodoContext);

  const [search, setSearch] = useState("");

  const count = useRef(1);

  const onChangeSearch = (e) => {
    console.log("onChangeSearch")
    setSearch(e.target.value);
  }

  useEffect(() => {
    console.log("search keyword updated")
  }, [search])

  useEffect(() => {
    console.log("List update...")
  });  

  const getFilteredData = () => {
    console.log("getFilteredData");
    if (search === "") {
      return todos;
    } else {
      // return todos.filter((todo) => {
      //   return todo.content.toLowerCase().includes(search.toLowerCase());            
      // });

      // (*)
      // todos[0].content = (todos[0].content) + (++count.current);
      return [
        {
          id: 0,
          isDone: false,
          content: "React 공부하기",
          // date: new Date().getTime(),
        } // TodoItem에서 memo해도 무조건 update 발생... (객체의 주소가 달라도, 프로퍼티의 값이 같으면 unmount/mount하지 않고, 그냥 update 만 한다...?)
        // todos[0], // update 발생 X
        // todos[0], // (*)을 실행할 경우, React 공부하기를 unmount하지 않고, 계속 update만 한다...
      ];
    }
  }

  const filteredTodos = getFilteredData();

  // const getAnalyzedData = () => {
    // console.log("getAnalyzedData 호출")
    // const totalCount = todos.length;
    // const doneCount = todos.filter((todo) => todo.isDone).length;
    // const notDoneCount = totalCount - doneCount;
    // return {
    //   totalCount,
    //   doneCount,
    //   notDoneCount,
    // }
  // }

  // callback 함수가 반환하는 값을 변수에 저장해서 사용 가능
  const {totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    }
    // 의존성 배열을 비워두면, 컴포넌트가 최초로 렌더링 되었을 때 딱 한 번만 실행된다.
  }, [todos]);
   

  // const {totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className='List'>
      <h4>Todo List</h4>

      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>

      <input type="text" placeholder='검색어를 입력하세요.'
        value={search}
        onChange={onChangeSearch} />
      <div className='todos_wrapper'>
        {
          filteredTodos.map((todo) => {
            return <TodoItem key={todo.id} {...todo} />;
          })
        }
      </div>
    </div>
  );
};

export default List;
