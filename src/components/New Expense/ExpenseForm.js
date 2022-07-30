import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
    const [titleValue, setTitleValue] = useState('')
    const [amountValue, setAmountValue] = useState('')
    const [dateValue, setDateValue] = useState('')

    const [showForm, setShowForm] = useState(false)

    const alterForm = () => {
        setShowForm(!showForm)
    }

    const titleChangeHandler = (event) => {
        setTitleValue(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmountValue(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDateValue(event.target.value)
    }

    const sumbitHandler = (event, userValue) => {
        event.preventDefault()

        const expenseData = {
            title: titleValue,
            amount: amountValue,
            date: new Date(dateValue)
        }

        onSaveExpenseData(expenseData)

        setAmountValue('')
        setDateValue('')
        setTitleValue('')
    }

    return (
        <>
            <form onSubmit={sumbitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={titleValue || ''} onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' value={amountValue || ''} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min="2019-01-01" max="2022-12-31" value={dateValue || ''} onChange={dateChangeHandler}/>
                    </div>    
                </div>
                <div className='new-expense__actions'>
                    <button type="button" onClick={onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </>
    )
}

export default ExpenseForm