import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const formOpenHandler = () => {
    setFormOpen(!formOpen);
  };

  const addExpenseButton = (
    <div>
      <button type="submit" onClick={formOpenHandler}>
        Add Expense
      </button>
    </div>
  );

  return (
    <div className="new-expense">
      {formOpen ? (
        <ExpenseForm
          onFormSubmit={formOpenHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        addExpenseButton
      )}
    </div>
  );
};

export default NewExpense;
