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