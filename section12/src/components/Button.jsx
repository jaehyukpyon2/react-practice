import React, { useEffect, memo } from 'react';
import './Button.css'

const Button = ({text, type, onClick}) => {

  useEffect(() => {
    console.log(`Button mounted _ ${text}`);

    return () => {
    	console.log(`Button unmounted _ ${text}`)
    }
  }, []);

  useEffect(() => {
    console.log(`Button updated _ ${text}`);
  });

  return (
    <button 
      className={`Button Button_${type}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default memo(Button);