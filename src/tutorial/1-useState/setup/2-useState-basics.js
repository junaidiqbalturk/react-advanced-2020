import React, { useState } from 'react';

// use 
// component name must be uppercase in case of Hooks/useState
//Hooks need to be in the function or component body
// must be in function/component body 
// cannot call conditionally 



const UseStateBasics = () => {
  const [text,setText] = useState('random title');

  const handleClick = () =>{
    if (text === 'random title')
    {
      setText('Hello World');   //it will set the text to new text if the text is 'random title'
    }
    else{
      setText('random title');   // this will revert back the changes 
    }

  };


  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
