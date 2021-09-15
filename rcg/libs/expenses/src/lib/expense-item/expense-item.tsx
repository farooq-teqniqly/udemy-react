import './expense-item.module.css';

/* eslint-disable-next-line */
export interface ExpenseItemProps {}

export function ExpenseItem(props: ExpenseItemProps) {
  return (
    <>
      <div>Date</div>
      <div>
        <h2>Title</h2>
      </div>
      <div>Amount</div>
    </>
  );
}

export default ExpenseItem;
