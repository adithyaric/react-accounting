import React, { useContext } from "react";
import { BillContext } from "../Context/BillContext";

const BillList = () => {
  const { bills, EditCheckbox, setEditModeEnabled } = useContext(BillContext);
  return (
    <div className="">
      {bills.map((bill, index) => {
        return (
          <div key={index}>
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                checked={bill.enabled}
                onChange={() =>
                  EditCheckbox({
                    title: bill.title,
                    monthlyCost: bill.monthlyCost,
                    enabled: !bill.enabled,
                  })
                }
              />
              {bill.title} - Rp.{bill.monthlyCost}
            </div>
          </div>
        );
      })}      
      <div className="btn" onClick={() => setEditModeEnabled(true)}>
        Edit
      </div>
    </div>
  );
};

export default BillList;
