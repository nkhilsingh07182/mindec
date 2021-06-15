import React, { useState } from 'react';

import './index.css';

const App = () => {

  const [num,setNum] =useState(0)
  const inc = () => {
    setNum(num+1);
  };

    const Dec = ()=> {
      if (num > 0){
      setNum(num-2)
      }else  {
        setNum(0);
      }
    };

    const doub = () => {
      setNum(num+5);
    };
      
     const reset = () => {
       setNum(0);
     }

    


  return(
<>
    <div>
      <div>
        <h1> {num} </h1>
        <div className="button">

          <button onClick={inc}>Increment</button>
          <button onClick={Dec}>Decrement</button>
          <button onClick={doub}>doboulInc</button>
          <button onClick={reset}>resetAll</button>
        </div>
      </div>
    </div>
</>

  )
}
export default App;