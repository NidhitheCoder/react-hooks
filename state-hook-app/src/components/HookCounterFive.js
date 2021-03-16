import React,{useState,useEffect} from 'react';

function HookCounterFive() {
  const [count,setCount] = useState(0);

  useEffect(()=>{
    document.title = `You clicked ${count} Times`;
  })
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>clicked {count} times</button>
    </div>
  );
}

export default HookCounterFive;