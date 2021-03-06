import React, { useState, useEffect } from "react";

function HookCounterFive() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - updating document title ");
    document.title = `You clicked ${count} Times`;
  }, [count]);
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
    </div>
  );
}

export default HookCounterFive;
