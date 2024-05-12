import React from "react";

const Child = (props) => {
  const { modifyCount } = props;
  console.log("Child component render");
  return (
    <>
      <div>Child Component</div>
      <button onClick={modifyCount}>Change Count from child</button>
    </>
  );
};

export default React.memo(Child);
