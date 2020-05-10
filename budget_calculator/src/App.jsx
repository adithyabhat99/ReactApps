import React, { useState, useEffect } from "react";
import "./App.css";
import { Alert, ExpenseForm, ExpenseList } from "./components";
import { v4 as uuid } from "uuid";

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  // State values
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [editId, setId] = useState(0);
  // useeffect
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  // functions
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        const tempExpenses = expenses.map((item) => {
          return item.id === editId ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "expense edited" });
      } else {
        const singleExpense = {
          id: uuid(),
          charge,
          amount,
        };
        setExpenses([singleExpense, ...expenses]);
        handleAlert({ type: "success", text: "expense added" });
      }
      setAmount("");
      setCharge("");
    } else {
      handleAlert({
        type: "danger",
        text: "charge cannot be empty and amount must be bigger than 0",
      });
    }
  };
  const handleAlert = ({ type, text }) => {
    setAlert({
      show: true,
      type,
      text,
    });
    setTimeout(() => {
      setAlert({
        show: false,
      });
    }, 3000);
  };
  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "cleared all expenses" });
  };
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "expense deleted" });
  };
  const handleEdit = (id) => {
    const expense = expenses.find((item) => item.id === id);
    const { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <h1>
        total spending:{" "}
        <span className="total">
          ${expenses.reduce((acc, curr) => (acc += parseInt(curr.amount)), 0)}
        </span>{" "}
      </h1>
    </>
  );
}

export default App;
