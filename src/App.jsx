import { useCallback, useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // useCallback not re-create the fumction on every re-render unless dependency not changed
  // React.memo hook ensures that only re-renders the function if props actually changed

  const handleClick1 =
    // useCallback(
    () => {
      console.log("--click 1--");
      setCount1((count) => count + 1);
    };
  // , [count1]);

  const handleClick2 =
    // useCallback(
    () => {
      console.log("--click 2--");
      setCount2((count) => count + 1);
    };
  // , [count2]);

  return (
    <>
      {count1} {count2}
      <Button label={"button 1"} onClick={handleClick1} />
      <Button label={"button 2"} onClick={handleClick2} />
    </>
  );
}

export default App;
