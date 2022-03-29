import React, { createContext, useEffect, useState } from "react";

const BillContext = createContext();

const BillProvider = ({ children }) => {
  const [bills, setBills] = useState([]);
  const [selectedCostInterval, setSelectedCostInterval] = useState("Monthly");
  const [editModeEnabled, setEditModeEnabled] = useState(false);

  const sortTitle = (bill) => {
    return bill.sort((a, b) =>
      a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0
    );
  };

  useEffect(() => {
    setBills(JSON.parse(localStorage.getItem("db-bills")) || []);
  }, [setBills]); //run once

  const AddBills = (bill) => {
    //Aksi Tambah Data
    const updateBill = sortTitle([...bills, bill]);
    localStorage.setItem("db-bills", JSON.stringify(updateBill));
    setBills(updateBill);
  };

  const EditCheckbox = (billToUpdate) => {
    //Edit status Checkbox
    const billsFiltered = bills.filter(
      (bill) => bill.title !== billToUpdate.title
    );
    const updateBill = sortTitle([...billsFiltered, billToUpdate]);
    localStorage.setItem("db-bills", JSON.stringify(updateBill));
    setBills(updateBill);
  };

  const DeleteBill = (billToDelete) => {
    const updateBill = bills.filter(
      (bill) => bill.title !== billToDelete.title
    );
    localStorage.setItem("db-bills", JSON.stringify(updateBill));
    setBills(updateBill);
  };

  return (
    <BillContext.Provider
      value={{
        bills,
        AddBills,
        EditCheckbox,
        selectedCostInterval,
        setSelectedCostInterval,
        editModeEnabled,
        setEditModeEnabled,
        DeleteBill,
      }}
    >
      {children}
    </BillContext.Provider>
  );
};

export { BillContext, BillProvider };
