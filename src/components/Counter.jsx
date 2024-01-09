import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);
  console.log(counter);
  const onAdd = () => {
    dispatch({
      type: "ADD",
      payload: 1,
    });
  };
  const onDec = () => {
    dispatch({
      type: "DEC",
      payload: 1,
    });
  };
  const onFive = () => {
    dispatch({
      type: "FIVE",
      payload: counter,
    });
  };
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={onAdd}>+++</button>
      <button onClick={onDec}>----</button>
      <button onClick={onFive}>5</button>
    </div>
  );
}

export default Counter;
