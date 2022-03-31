import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../stores/CounterState";

const Counter = () => {
  const [incrementNumber, setIncrementNumber] = useState(1);
  const [decrementNumber, setDecrementNumber] = useState(1);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      Counter Component
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(increment())}> (+) </button>
        <button onClick={() => dispatch(decrement())}> (-) </button> <br />
        <button onClick={() => dispatch(incrementByAmount(incrementNumber))}>
          Increment by {incrementNumber}
        </button>
        <br />
        <button onClick={() => dispatch(decrementByAmount(decrementNumber))}>
          Decrement by {decrementNumber}
        </button>
      </div>
      <form>
        <label>
          Enter a desired number for increment:
          <input
            type="number"
            onChange={(event) => setIncrementNumber(+event.target.value)}
          />
        </label>
      </form>
      <form>
        <label>
          Enter a desired number for decrement:
          <input
            type="number"
            onChange={(event) => setDecrementNumber(+event.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default Counter;
