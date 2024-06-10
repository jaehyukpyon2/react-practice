import React, { useRef } from 'react';
import './TodoItem.css'
import { useEffect } from 'react';

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

  const count = useRef(1);

  useEffect(() => {
    return () => {
      console.log("TodoItem unmount => " + content);
    }
  },[])

  useEffect(() => {
    console.log("TodoItem update...")
    count.current++;
    console.log(count.current);
  });

  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  const onClickDeleteButton = () => {
    onDelete(id);
  }

  return (
    <div className='TodoItem'>
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default TodoItem;