import "./App.css";
import React ,{useContext}from "react";
import ComponentA from "./Component/ComponentA";
import CountContext from "./Component/CountContext";


function App() {
  const AppContext = useContext(CountContext)
  return (
    <>
    {/* Context at App level is {AppContext.name} */}
  <ComponentA />
    </>
    
)
}

export default App;
