import React from 'react'

export default function ExpenseDate(props) {
    const month=props.date.toLocaleDateString('en-US', {
        month: 'long'})
        const year=props.date.toLocaleDateString.getFullYear()
            const day=props.date.toLocaleDateString('en-US', {
                day: 'numeric'})
  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className=''>{year}</div>
        <div>{day}</div>
    </div>
  )
}
