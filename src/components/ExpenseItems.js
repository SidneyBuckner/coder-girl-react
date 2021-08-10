import ExpenseDates from './ExpenseDates'
import './ExpenseItems.css'

const ExpenseItems = (props) => {
        return ( < div className = "expense-item" >
            <
            ExpenseDates date = {
                props.date
            }
            /> <
            div className = "expense-item__description" >
            <
            h2 > {
                props.title
            } < /h2> <
            div className = "expense-item__price" > $ {
                props.amount
            } < /div> < /
            div > <
            /div>);
        }

        export default ExpenseItems;