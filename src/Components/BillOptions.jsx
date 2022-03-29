import React, { useContext } from "react";
import { BillContext } from "../Context/BillContext";

const BillOptions = () => {
  const { selectedCostInterval, setSelectedCostInterval } =
    useContext(BillContext);
  return (
    <div className="">
      <div
        className={
          selectedCostInterval === "Daily" ? "btn btn-primary" : "btn"
        }
        onClick={(e) => setSelectedCostInterval(e.target.innerText)}
      >
        Daily
      </div>
      <div
        className={
          selectedCostInterval === "Weekly" ?"btn btn-primary" : "btn"
        }
        onClick={(e) => setSelectedCostInterval(e.target.innerText)}
      >
        Weekly
      </div>
      <div
        className={
          selectedCostInterval === "Monthly" ?"btn btn-primary" : "btn"
        }
        onClick={(e) => setSelectedCostInterval(e.target.innerText)}
      >
        Monthly
      </div>
      <div
        className={
          selectedCostInterval === "Yearly" ?"btn btn-primary" : "btn"
        }
        onClick={(e) => setSelectedCostInterval(e.target.innerText)}
      >
        Yearly
      </div>
    </div>
  );
};

export default BillOptions;
