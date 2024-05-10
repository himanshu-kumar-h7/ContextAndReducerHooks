import React, { useContext } from "react";
import CountContext from "./CountContext";

const ComponentC = () => {
  const count = useContext(CountContext);
  return (
    <>
      <div className="container">
        <h4>GrandChild of A</h4>
        <div className="mb-3">
          <label className="form-label">Name : {count.name}</label>
        </div>
        <div className="mb-3">
          <label className="form-label">Surname : {count.surname} </label>
        </div>
        <div className="mb-3">
          <label className="form-label">Age :  {count.age}</label>
        </div>
        <div className="mb-3">
          <label className="form-label">Email :  {count.email}</label>
        </div>
        <div className="mb-3">
          <label className="form-label">Address :  {count.address}</label>
       
      </div>
      </div>
    </>
  );
};

export default ComponentC;
