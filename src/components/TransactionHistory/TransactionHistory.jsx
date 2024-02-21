import css from "styles/TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
  return (
    <table class={css.transactionHistory}>
      <thead>
        <tr class={css.transactionHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id} class={css.transactionRecord}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
