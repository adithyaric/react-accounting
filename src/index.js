import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import { BillProvider } from "./Context/BillContext";

ReactDOM.render(
  <StrictMode>
    <BillProvider>
      <App />
    </BillProvider>
  </StrictMode>,
  document.getElementById("root")
);
