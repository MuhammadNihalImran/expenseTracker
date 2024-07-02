import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseTracker from "./component/ExpenseTracker";

const App = () => {
  return (
    <div className="d-flex p-5  align-self-center justify-content-center">
      <ExpenseTracker />
    </div>
  );
};

export default App;
