import React from 'react';
import './List.css'
import TodoItem from './TodoItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';

const List = ({todos, onUpdate, onDelete}) => {
  const [search, setSearch] = useState("");
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
      return todos.filter((todo) => {
        return todo.content.toLowerCase().includes(search.toLowerCase());            
      });
      // return [
      //   {
      //     id: 0,
      //     isDone: false,
      //     content: "React 공부하기",
      //     date: new Date().getTime(),
      //   }
      // ];
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
            return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
          })
        }
      </div>
    </div>
  );
};

export default List;
