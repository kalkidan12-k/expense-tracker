import ExpenseDate from './ExpenseDate';
import'./ExpenseItem.css'

export default function ExpenseItem(props) {
    
    
  return (
    <div className='expense-item'>
      
        <ExpenseDate/>
      
      <div>
        <h2>{props.title}</h2>
        <div className='expense-item__price'> ${props.amount}</div>
      </div>
    </div>
  )
}

