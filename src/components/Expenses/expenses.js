import ExpensesList from './ExpensesList'
import './expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "./ExpenseFilter"
import ExpensesChart from './ExpensesChart'
import {useState} from 'react'

const Expenses = ({ expenses }) => {
    const [year, setYear] = useState('2021')

    const handleYear = (selectedyear) => {
        setYear(selectedyear)
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year
    })

     return <>
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={year} 
                    yearHandler={handleYear} 
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    </>
}

export default Expenses