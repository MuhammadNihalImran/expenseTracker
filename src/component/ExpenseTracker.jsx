import React, { useState } from "react";

const ExpenseTracker = () => {
  const [data, setData] = useState([{ name: "mango", price: "1000" }]);
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddItem = () => {
    if (item.trim() !== "" && amount.trim() !== "") {
      setData([...data, { name: item, price: amount }]);
      setItem(""); // Clear input fields after adding item
      setAmount("");
    } else {
      alert("Please fill out both item name and amount.");
    }
  };

  const handleClearAll = () => {
    setData([]); // Clear all items by setting data to an empty array
  };

  const calculateTotal = () => {
    let total = 0;
    data.forEach((item) => {
      total += parseFloat(item.price);
    });
    return total.toFixed(2);
  };

  return (
    <>
      <div className="widthSet p-4 rounded-4">
        <h1 className="text-center">Expense Tracker</h1>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label fs-5">
            Item Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter item name"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label fs-5">
            Item Amount:
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter item amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="styleButton d-flex gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddItem}
            disabled={!item || !amount} // Disable button if item or amount is empty
          >
            Add Item
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClearAll}
          >
            Clear All
          </button>
        </div>
        {data.map((item, index) => (
          <p
            key={index}
            className="addItems shadow-sm p-3 mb-2 bg-body-tertiary rounded"
          >
            {item.name}: <span>$</span> {item.price}
          </p>
        ))}
        <h2 className="price">
          Total: <span>$</span>
          {calculateTotal()}
        </h2>
      </div>
    </>
  );
};

export default ExpenseTracker;
