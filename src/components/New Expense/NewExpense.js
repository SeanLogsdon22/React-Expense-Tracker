import React, {useState} from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {
    const [isEditing, setIsEditing] = useState(false)

    const expenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()

        }
        onAddExpense(expenseData)
        setIsEditing(false)
    }

    const startEditing = () => {
        setIsEditing(true)
    }

    const stopEditing = () => {
        setIsEditing(false)
    }

    return (
        <>
            <div className='new-expense'>
                {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
                {isEditing && <ExpenseForm onSaveExpenseData={expenseHandler} onCancel={stopEditing} />}
            </div>
        </>
    )
}

export default NewExpense