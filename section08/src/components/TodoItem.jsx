import React from 'react';
import './TodoItem.css'
import { useEffect } from 'react';

const TodoItem = ({id, isDone, content, date, onUpdate}) => {

  useEffect(() => {
    console.log("TodoItem update...")
  });

  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  return (
    <div className='TodoItem'>
      <input type="checkbox" checked={isDone} readOnly />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;