import "./App.css";
import React ,{useContext}from "react";
import ComponentA from "./Component/ComponentA";
import CountContext from "./Component/CountContext";
import ComponentD from "./Component/ComponentD";
import Reducer from "./Component/ReducerExample";


function App() {
  
  return (
    <>
    {/* Context at App level is {AppContext.name} */}
  {/* <ComponentA />
  <ComponentD /> */}
  <Reducer />
    </>
    
)
}

export default App;
