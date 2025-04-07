import'./ExpenseItem.css'

export default function ExpenseItem(props) {
    const formattedDate = props.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    
  return (
    <div className='expense-item'>
      <div className='expense-item__description'>{formattedDate}</div>
      <div>
        <h2>{props.title}</h2>
        <div className='expense-item__price'> ${props.amount}</div>
      </div>
    </div>
  )
}

