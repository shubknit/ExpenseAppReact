import { ExpenseRow } from './ExpenseRow';

export const ExpenseList = ({expenseList ,removeItem, editItem}) => 

		 (
		 	
		  <div className = "content-container">
				<div className = 'list-header'>
					<div> Expense</div>
					<div> Action</div>
				</div>
				<div className = 'list-body'>
					{ expenseList.map((data,i) => 
						<ExpenseRow key = {i} expenseRowData = {data} removeItem = {removeItem} editItem = {editItem}/>

					)}	
				</div>
			</div> 

		
		)
	