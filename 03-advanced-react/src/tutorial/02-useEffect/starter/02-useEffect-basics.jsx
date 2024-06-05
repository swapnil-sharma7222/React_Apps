import { useEffect, useState } from 'react';

const UseEffectBasics = () => {
  let [value, setValue] = useState(0);
  let [bollean, setBollean] = useState(true);
  const sayHello = () => {
    console.log('hello there', bollean);
  };
  sayHello();

  useEffect(()=> {
    console.log("hey there", bollean);
  }, [bollean])
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => {
        if(value> 10) setBollean = false;
        setValue(value + 1)}}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
