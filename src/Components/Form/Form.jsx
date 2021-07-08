import React from "react";
import { Calculate } from "../Calculate/Calculate";
import "./Form.css";

export const Form = () => {
  return (
    <div>
      <div className="form">
        <div className="form-element">
          <label htmlFor="Customer-number">Enter the Customer Id:</label>
          <input type="text" placeholder="Enter the customer id" />
          <br />
        </div>
        <div className="form-element">
          <label htmlFor="per-unit">Enter the per Unit Cost (in Kw/hr):</label>
          <input type="text" placeholder="Enter the per unit cost" />
          <br />
        </div>
        <div className="form-element">
          <label htmlFor="units-used">Enter the total units used:</label>
          <input type="text" placeholder="Enter the total units used" />
          <br />
        </div>
      </div>
      <div className="calculate">
        <Calculate />
      </div>
    </div>
  );
};
