import React, { useEffect, memo, useState } from 'react';
import Header from './../components/Header'
import Button from './../components/Button'
import DiaryList from '../components/DiaryList';

const Home = () => {
  // const [params, setParams] = useSearchParams();
  // console.log(params.get("value"));

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Home mounted")
  }, [])
  useEffect(() => {
    console.log("Home updated")
  })

  const onClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      Home page <br />
      <button
        onClick={onClick}
      >Home page state update</button>
      <Header
        title={"2024년 6월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />} />
      <DiaryList />
    </div>
  );
};

export default memo(Home);