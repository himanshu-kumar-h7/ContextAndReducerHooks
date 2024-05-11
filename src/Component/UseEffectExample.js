import React, { useEffect, useState } from "react";

// class UseEffectExample extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`;
//   }

//   componentDidUpdate(prevProps, prevState) {

//     document.title = `Clicked ${this.state.count} times`;
//   }

//   componentWillUnmount() {
//     alert("Component unmounted")
//   }

//   handleClick = () => {
//     alert("button clicked");
//   };

//   render() {
//     return (
//       <>
//         <div>Count: {this.state.count}</div>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increase Count
//         </button>
//       </>
//     );
//   }
// }

const UseEffectExample = () => {
 
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    document.title = `Clicked ${count} times`;
// The below code snippet used as umount
//     return () => {
//       alert("USeEffect Component unmontted");
//     };
 });




  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleCount} style={{ height: "30px", width: "100px" }}>
        {count}
      </button>
    </>
  );
};

export default UseEffectExample;
