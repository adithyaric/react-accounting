import React, { useContext, useState } from "react";
import { BillContext } from "../Context/BillContext";

const Addbill = () => {
  const { AddBills } = useContext(BillContext);
  const [newBillTitle, setNewBillTitle] = useState("");
  const [newBillCost, setNewBillCost] = useState("");

  const billObjectValid = () => {
    //Check newBillCost is truthy and is a number
    const costValid = newBillCost && Number.parseFloat(newBillCost) > 0; //Bilangan desimal positif

    //Check newBillTitle is truthy and not only whitespace char
    const titleValid =
      newBillTitle && newBillTitle.split("").find((char) => char !== "");
    return titleValid && costValid;
  };

  const clearForm = () => {
    setNewBillCost("");
    setNewBillTitle("");
  };
  console.count("render");
  return (
    <div className="">
      <input
        type="text"
        className="btn"
        placeholder="Enter bill title"
        value={newBillTitle}
        onChange={(e) => setNewBillTitle(e.target.value)}
      />
      <input
        type="number"
        className="btn"
        placeholder="Enter bill Cost $ Monthly"
        value={newBillCost}
        onChange={(e) => setNewBillCost(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={() => {
          if (billObjectValid()) {
            AddBills({
              title: newBillTitle,
              monthlyCost: newBillCost,
              enabled: true,
            });
            clearForm();
          }
        }}
      >
        Add Bill
      </button>
    </div>
  );
};

export default Addbill;
