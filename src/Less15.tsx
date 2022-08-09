import { useState } from "react";
import useToggle from "./hooks/useToggle";
import useTimeout from "./hooks/useTimeout";
import useDebounce from "./hooks/useDebounce";
import useUpdateEffect from "./hooks/useUpdateEffect";

const ToggleComponent = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <div>{`${value}`}</div>
      <button onClick={() => toggleValue()}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </div>
  );
};

const TimeComponent = () => {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);

  return (
    <div>
      <div>{`${count}`}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
};

const DebounceComponent = () => {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div>
      <div>{`${count}`}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

const UpdateEffectComponent = () => {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
      <div>{`${count}`}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

const ArrayComponent = () => {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
      <div>{`${count}`}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

const Less15 = () => {
  return (
    <>
      <b>ToggleComponent</b>
      <ToggleComponent />
      <br />
      {/* <b>TimeComponent</b>
      <TimeComponent />
      <br />
      <b>DebounceComponent</b>
      <DebounceComponent />
      <br /> 
      <b>UpdateEffectComponent</b>
      <UpdateEffectComponent />*/}
      {/* <b>ArrayComponent</b>
      <ArrayComponent />
      <br />
      <hr /> */}
    </>
  );
};

export default Less15;
