import React from 'react';
import './List.css'
import TodoItem from './TodoItem';
import { useState } from 'react';
import { useEffect } from 'react';

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

  return (
    <div className='List'>
      <h4>Todo List</h4>
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