import React, { useContext } from "react";
import { BillContext } from "../Context/BillContext";

const EditBill = () => {
  const { bills, setEditModeEnabled, EditCheckbox, DeleteBill } =
    useContext(BillContext);
  console.count("render");
  return (
    <div className="">
      {bills.map((bill, billIndex) => {
        return (
          <div key={billIndex} className="">
            <div className="">
              {bill.title}
              <input
                className="btn"
                type="number"
                value={bill.monthlyCost}
                onChange={(e) =>
                  EditCheckbox({
                    title: bill.title,
                    enabled: bill.enabled,
                    monthlyCost: e.target.value,
                  })
                }
              />
              <div
                className="btn btn-primary"
                onClick={(e) => {
                  DeleteBill(bill);
                }}
              >
                Delete
              </div>
            </div>
          </div>
        );
      })}
      <div className="btn" onClick={() => setEditModeEnabled(false)}>
        Done
      </div>
    </div>
  );
};

export default EditBill;
