import React, {useState, useEffect} from 'react';

function Timer (){
   const [count, setCount] = useState(10);

  useEffect(() =>{
    const timerId = setInterval (() =>{
      setCount(count - 1);}, 1000);
    }
           ,[]);

  return <div> Time Remaining: {count}s </div>
 }

export default function App() {
  return (
    <main>

    </main>
  )
}
