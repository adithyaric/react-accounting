import React, { useContext } from "react";
import { BillContext } from "../../Context/BillContext";
import Addbill from "../Addbill";
import BillList from "../BillList";
import BillOptions from "../BillOptions";
import BillTotal from "../BillTotal";
import EditBill from "../EditBill";

const App = () => {
  const { editModeEnabled } = useContext(BillContext);
  return (
    <>
      <div className="bills-container">
        {editModeEnabled ? (
          <span>
            <BillTotal />
            <EditBill />
          </span>
        ) : (
          <span>
            <BillTotal />
            <BillOptions />
            <Addbill />
            <BillList />
          </span>
        )}
      </div>
    </>
  );
};

export default App;
