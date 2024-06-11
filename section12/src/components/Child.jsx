import React, { useEffect, memo } from 'react';

const Child = () => {

  useEffect(() => {
    console.log("Child mounted...")
  }, [])

  useEffect(() => {
    console.log("Child updated...")
  })

  return (
    <div>
      Child 
    </div>
  );
};
// export default Child;
export default memo(Child);