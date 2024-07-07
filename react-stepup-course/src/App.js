import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>{count}</p>
    </div>
  );
}