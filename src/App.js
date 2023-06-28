import React, {useEffect, useState} from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

const increment= () => {
    setCount(count + 1);
}

const decrement= () => {
    setCount(count - 1);
}


  return (
      <div className="container">
        <div className="count">
            <h1>Sayaç  {count}</h1>
            <div className="flex">
                <button onClick={increment} > Artır</button>
                <button onClick={decrement}> Azalt</button>
            </div>

        </div>
      </div>
  );
};

export default Counter;