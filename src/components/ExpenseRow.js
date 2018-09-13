import { Link } from 'react-router-dom';

export const ExpenseRow = ({expenseRowData, removeItem}) => {
	const remove = () => {
		removeItem(expenseRowData.id)
	}
	return(
		<div className = 'list-item'>		
			<Link to = {`edit/${expenseRowData.id}`}>
				<div className ="">
					<div className = "col-1">
						<div> description : { expenseRowData.description } </div>
						<div> Date: { expenseRowData.date } </div>
					</div>	
					<div className = "list">
						Amount: { expenseRowData.amount }
					</div>
					
				</div>
			</Link>
			<button className = 'button button--secondary' onClick = {remove}> Remove </button>
		</div>
	)
}	