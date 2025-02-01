import useClickCounter from "./hooks/useClickCounter";

const Counter = () => {
  const [count, triggerClick] = useClickCounter();
  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={triggerClick}>Add</button>
    </>
  );
};

export default Counter;
