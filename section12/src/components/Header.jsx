import React, { useEffect, memo } from 'react';
import './Header.css';

const Header = ({title, leftChild, rightChild}) => {
  console.log("Header!");
  useEffect(() => {
    console.log("Header updated...");
  });
  useEffect(() => {
    console.log("Header mounted...");    
  }, []);
  return (
    <header className='Header'>
      <div className='header_left'>{leftChild}</div>
      <div className='header_center'>{title}</div>
      <div className='header_right'>{rightChild}</div>
    </header>
  );
};

export default memo(Header);
// 이렇게 memo를 적용해 뒀어요, 상위 컴포넌트 (Home.jsx)에서 state이 변경되면,
// Header.jsx는 무조건 update 가 실행된다.
// but,Header.jsx에 props로 <Button />컴포넌트를 두 개 받는데, 이 두 버튼 컴포넌트들은 자신들이 받는 props가 변경되지 않으면 update 실행 X  
// (물론, Button에 memo가 적용되어 있어야 하겠죠?)