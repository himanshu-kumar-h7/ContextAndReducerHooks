import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  console.log("Parent component render");
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(50000);

  const changeCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const changeSalary = useMemo(() => {
    setSalary((prevSalary) => prevSalary + 1000);
  }, [count]);

  return (
    <div>
      Parent Component
      <div>
        Count: {count}
        <br />
        Salary: {salary}
      </div>
      <div>
        <button onClick={changeSalary}>Increase Salary from parent</button>
      </div>
      <Child modifyCount={changeCount} />
    </div>
  );
};

export default Parent;
