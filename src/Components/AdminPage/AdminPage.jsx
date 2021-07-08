import React, { useState } from "react";
// import { Form } from "../Form/Form";
import "./AdminPage.css";

export const AdminPage = () => {
  const [id, setId] = useState("");
  const [cost, setCost] = useState("");
  const [units, setUnits] = useState("");
  const [total, setTotal] = useState("");

  const calculateBill = () => {
    let totalCost = cost * units;
    setTotal(totalCost);
    setCost("");
    setUnits("");
  };

  return (
    <div>
      <div className="title-bar">Calculate your Electricity bill</div>
      <div className="form">
        <div className="form-element">
          <label htmlFor="Customer-number">Enter the Customer Id:</label>
          <input
            placeholder="Enter the customer id"
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <br />
        </div>
        <div className="form-element">
          <label htmlFor="per-unit">Enter the per Unit Cost (in Kw/hr):</label>
          <input
            placeholder="Enter the per unit cost"
            type="text"
            value={cost}
            onChange={(e) => {
              setCost(e.target.value);
            }}
          />
          <br />
        </div>
        <div className="form-element">
          <label htmlFor="units-used">Enter the total units used:</label>
          <input
            type="text"
            value={units}
            onChange={(e) => {
              setUnits(e.target.value);
            }}
            placeholder="Enter the total units used"
          />
          <br />
        </div>
      </div>
      <div className="calculate">
        {/* <Calculate /> */}
        <div className="calculate">
          <button onClick={calculateBill}>Calculate</button>
        </div>
        <div>
          <h2>Total Cost:{total}</h2>
        </div>
      </div>
      {/* // <Form /> */}
    </div>
  );
};
