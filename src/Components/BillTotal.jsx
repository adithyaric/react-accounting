import React, { useContext } from "react";
import { BillContext } from "../Context/BillContext";

const BillTotal = () => {
  const { bills, selectedCostInterval } = useContext(BillContext);
  const moneyIntervalTransform = (cost) => {
    const monthlyCost = Number.parseFloat(cost);
    switch (selectedCostInterval) {
      case "Daily":
        return (monthlyCost * 12) / 365;
      case "Weekly":
        return (monthlyCost * 12) / 52;
      case "Monthly":
        return monthlyCost; //Default selectedCostInterval
      case "Yearly":
        return monthlyCost * 12;
      default:
        return 0;
    }
  };
  return (
    <div className="">
      <h5>{selectedCostInterval} Total :</h5>
      {"$" +
        bills
          .reduce((acc, val) => {
            return val.enabled
              ? moneyIntervalTransform(val.monthlyCost) + acc
              : acc;
          }, 0)
          .toFixed(2)}
      <hr />
      <h5>{selectedCostInterval} Total Saved :</h5>
      {"$" +
        bills
          .reduce((acc, val) => {
            return !val.enabled //disabled
              ? moneyIntervalTransform(val.monthlyCost) + acc
              : acc;
          }, 0)
          .toFixed(2)}
      <hr />
    </div>
  );
};

export default BillTotal;
