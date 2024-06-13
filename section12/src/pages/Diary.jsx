import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Diary = () => {
  useEffect(() => {
    console.log("Diary mounted...")
  }, []);
  useEffect(() => {
    console.log("Diary updated...")
  });

  // const params = useParams();
  // console.log(params);

  return (
    <div>
      Diary
    </div>
  );
};

export default Diary;