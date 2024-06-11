import React, { useEffect, memo } from 'react';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  // const [params, setParams] = useSearchParams();
  // console.log(params.get("value"));

  useEffect(() => {
    console.log("Home mounted")
  }, [])
  useEffect(() => {
    console.log("Home updated")
  })

  return (
    <div>
      Home page
    </div>
  );
};

export default memo(Home);