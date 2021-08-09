import './ExpenseItems.css'
const ExpenseItems = () => {
        const expenseDates = new Date(2021, 4, 12);
        const expenseTitles = 'Tuition';
        const expenseAmounts = 4890.00;
        return ( < div className = "expense-item" >
            <
            div > {
                expenseDates.toString()
            } < /div> <
            div className = "expense-item__description" >
            <
            h2 > {
                expenseTitles
            } < /h2> <
            div className = "expense-item__price" > {
                expenseAmounts
            } < /div> < /
            div > <
            /div>);
        }

        export default ExpenseItems;