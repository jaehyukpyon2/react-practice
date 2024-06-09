import React from 'react';
import './Editor.css'
import { useState } from 'react';
import { useRef } from 'react';

const Editor = ({onCreate}) => {
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