import React from 'react';
import './List.css'
import TodoItem from './TodoItem';
import { useState } from 'react';
import { useEffect } from 'react';

const List = ({todos, onUpdate}) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    console.log("search keyword updated")
  }, [search])

  const getFilteredData = () => {
    console.log("getFilteredData");
    if (search === "") {
      return todos;
    } else {
      return todos.filter((todo) => {
        return todo.content.toLowerCase().includes(search.toLowerCase());
      });
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
            return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />;
          })
        }
      </div>
    </div>
  );
};

export default List;