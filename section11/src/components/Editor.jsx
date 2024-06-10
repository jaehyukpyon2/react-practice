import React from 'react';
import './Editor.css'
import { useState, useContext } from 'react';
import { useRef } from 'react';
import { TodoDispatchContext } from '../App';

const Editor = () => {
  // const data = useContext(TodoContext);
  // console.log(data); // 객체 형태로 TodoContext.Provider의 value에 작성했던 데이터들이 있다...

  const { onCreate } = useContext(TodoDispatchContext);
  
  const [content, setContent] = useState("test");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }

  const onSubmit = () => {
    if (content == "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }

  return (
    <div className='Editor'>
      <input 
        ref={contentRef}
        type="text" placeholder='새로운 Todo...'
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown} />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;