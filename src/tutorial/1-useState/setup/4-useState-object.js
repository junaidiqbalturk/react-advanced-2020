import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
    name: 'peter',
    age:24,
    message:'Random message',
  });
  
  const changeMessage = () => {
    setPerson({ ...person, message: 'Hello world'})
  };

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>change Message</button>

    </React.Fragment>
  );
};

export default UseStateObject;
