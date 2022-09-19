export default function TransactionHistoryMenu({ type, amount, currency}) {
   {
        return (
            <tr className="transaction">
      <td className="td">{type}</td>
      <td className="td">{amount}</td>
      <td className="td">{currency}</td>
    </tr>
        
    )
  }
}