import React, { useContext } from "react";
import DetailsContext from "./DetailsContext";
import CounterContext from "./CounterContext";
const ComponentC = () => {
  const details = useContext(DetailsContext);
  const count = useContext(CounterContext);
  return (
    <>
      <div className="container">
        <h4>GrandChild of A</h4>
        <div className="mb-3">
          <label className="form-label">Name : {details.name}</label>
        </div>
        <div className="mb-3">
          <label className="form-label">Surname : {details.surname} </label>
        </div>
        <div className="mb-3">
          <label className="form-label">Age : {details.age}</label>
        </div>
        <div className="mb-3">
          <label className="form-label">Email : {details.email}</label>
        </div>
        <div className="mb-3">
          <label className="form-label">Address : {details.address}</label>
        </div>
        <div className="mb-3">
          <label className="form-label">Count : {count}</label>
        </div>
      </div>
    </>
  );
};

export default ComponentC;
