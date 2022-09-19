import TransactionHistoryMenu from "../TransactionHistory/TransactionHistoryMenu"

export default function TransactionHistory({ items }) {
    const elements = items.map(({id, type, amount, currency}) => 
        <TransactionHistoryMenu key={id} type={type} amount={ amount} currency={ currency} />
    )
   {
        return (
            <table className="transaction-history">
                <thead className="transaction-box">
                    <tr className="transaction-name">
                     <th className="th">Type</th>
                     <th className="th">Amount</th>
                     <th className="th">Currency</th>
                    </tr>
                </thead>
                <tbody  className="history">{ elements }</tbody  >
        </table>
        
    )
  }
}