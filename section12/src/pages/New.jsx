import React, {useEffect} from 'react';

const New = () => {

  useEffect(() => {
    console.log("New mounted")
  }, [])
  useEffect(() => {
    console.log("New updated")
  })


  return (
    <div>
      New page
    </div>
  );
};

export default New;