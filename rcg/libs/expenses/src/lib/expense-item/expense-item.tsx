import styles from './expense-item.module.css';

/* eslint-disable-next-line */
export interface ExpenseItemProps {}

export function ExpenseItem(props: ExpenseItemProps) {
  return (
    <div className={styles['expense-item']}>
      <div>September 15, 2021</div>
      <div>
        <h2 className={styles['expense-item__description']}>Car Insurance</h2>
        <div className={styles['expense-item__price']}>$65.89</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
