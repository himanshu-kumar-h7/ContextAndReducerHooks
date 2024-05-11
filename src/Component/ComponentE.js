import React,{useContext} from "react";
import CountContext from "./DetailsContext";


function ComponentE() {
    const Data =useContext(CountContext)
  return (
    <>
    <div className="container">
    <p style={{color : 'green'}}><strong>I am using Context value in another child component</strong> Name is {Data.name} Email is {Data.email}</p>
    </div>
    
    </>


  )
}
export default ComponentE
