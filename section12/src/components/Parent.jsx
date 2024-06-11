import React, { useEffect, memo } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import New from '../pages/New';
import Diary from '../pages/Diary';
import Notfound from '../pages/Notfound';
import Child from './Child';

const Parent = () => {

  useEffect(() => {
    console.log("Parent mounted")
  }, [])

  useEffect(() => {
    console.log("Parent updated")
  })

  return (
    <div>
      <h4>Parent 1</h4>
      <div>
        <Link to={"/"}>Goto Home!</Link><br />
        <Link to={"/new"}>Goto new!</Link><br />
        <Link to={"/diary"}>Goto diary!</Link><br />
      </div>
      <h4>Parent 2</h4>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <hr />
      <Child />
    </div>
  );
};

export default memo(Parent);