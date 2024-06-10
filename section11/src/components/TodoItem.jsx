import React, { memo, useRef } from 'react';
import './TodoItem.css'
import { useEffect, useContext } from 'react';
import { TodoContext } from '../App';

const TodoItem = ({
  id, 
  isDone,
  content, 
  date,
}) => {

  const {onUpdate, onDelete} = useContext(TodoContext);

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
      {/* <div className='date'>{new Date(date).toLocaleDateString()}</div> */}
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

//export default TodoItem;

export default memo(TodoItem, (prevProps, nextProps) => {
  // 부모 컴포넌트가 re-rendering 될 때 마다, 부모로부터 전달받은 props가 변경됐는지 memo 메서드 스스로 판단하는 게 아닌,
  // callback함수의 인자로 prevProps, nextProps를 전달해줘서, callback 함수의 반환값에 따라 props가 변경되었는지 변경 안 되었는지 판단한다.
  // return true -> props 변경되지 않음 (리렌더링 하지마)
  // return false -> props가 변경됨(리렌더링 해라...)
  console.log("--------------1--------------")

  // return true;

  if (prevProps.id != nextProps.id) return false;
  console.log("-------------2----------------");
  if (prevProps.isDone != nextProps.isDone) return false;
  console.log("-------------3----------------");
  if (prevProps.content != nextProps.content) return false;
  console.log("-------------4----------------");
  if (prevProps.date != nextProps.date) return false;

  console.log("--------------5--------------")
  return true;
});