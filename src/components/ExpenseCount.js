import { Link } from 'react-router-dom';
export const ExpenseCount = ({noOfExpenses, expenseTotal}) => (
	<div className ="page-header">
		<div className = 'content-container'>
			<h1 className = "page-header__title"> Viewing { noOfExpenses } expenses totalling ${ expenseTotal }</h1>
			<Link to = '/create'>
					<button className = 'button'> Add Expense </button>
			</Link>
		</div>
	</div>
)