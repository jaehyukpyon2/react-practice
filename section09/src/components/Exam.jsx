import React from 'react';
import { useReducer } from 'react';

// reducer -> 변환기 (상태를 실제로 변환시키는 변환기 역할을 하는 함수)
function reducer(state, action) {
  // state -> 현재의 상태
  // action -> dispatch안에 작성한 인수 (action 객체)
  console.log(state, action);

  // 새로운 상태로 설정하고 싶은 값을 return 하면 ok
  if (action.type === "INCREASE") {
    return state + action.data;
  } else if (action.type === "DECREASE") {
    return state - action.data;
  } else {
    return state;
  }
}

const Exam = () => {
  // dispatch: 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  // 컴포넌트 내부에서 dispatch를 호출하게 되면, 상태변화가 요청되고, useReduce가 
  // 상태변화를 실제로 처리하게 될 함수를 호출하게 되는데, 함수는 직접 만들어야 함
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({ // action 객체
      type: "INCREASE",
      data: 1,
    });
  }

  const onClickMinus = () => {
    dispatch({ // action 객체
      type: "DECREASE",
      data: 1,
    });
  }

  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={onClickPlus}>+</button>
      <button
        onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;