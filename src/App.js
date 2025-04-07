import React from 'react'
import ExpenseItem from './Component/ExpenseItem'

export default function App() {
  const expenses = [
    {
      date: new Date(2023, 2, 28),
      title: 'toilet paper',
      amount: 300,
    },
    {
      date: new Date(2023, 1, 11),
      title: 'Car Insurance',
      amount: 200,
    },
    {
      date: new Date(2023, 4, 23),
      title: 'for book',
      amount: 450,
    },
    {
      date: new Date(2023, 3, 12),
      title: 'food',
      amount: 300,
    },
  ]
  return (
    <div>
      <ExpenseItem
       date={expenses[0].date}
      title={expenses[0].title}
      amount={expenses[0].amount}></ExpenseItem>
      <ExpenseItem 
      date={expenses[1].date}
      title={expenses[1].title}
      amount={expenses[1].amount}></ExpenseItem>
      <ExpenseItem 
      date={expenses[2].date}
      title={expenses[2].title}
      amount={expenses[2].amount}></ExpenseItem>
      <ExpenseItem 
       date={expenses[3].date}
      title={expenses[3].title}
      amount={expenses[3].amount}></ExpenseItem>
    </div>
  )
}
