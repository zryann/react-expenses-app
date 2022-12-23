import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isShown, setIsShown] = useState(false);
  const handleSaveExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onNewExpense(newExpense);
    setIsShown(false);
  };
  const handleEnable = () => {
    setIsShown(true);
  };
  const handleDisable = () => {
    setIsShown(false);
  };
  return (
    <div className="new-expense">
      {!isShown && <button onClick={handleEnable}>Add New Expense</button>}
      {isShown && (
        <ExpenseForm
          onSaveExpense={handleSaveExpense}
          onDisableForm={handleDisable}
        />
      )}
    </div>
  );
};
export default NewExpense;
