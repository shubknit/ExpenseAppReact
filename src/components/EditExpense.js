
export const EditExpense = (props) => {
	let _description , _date, _amount, _note;
	const {expenseData, editExpenseId, addEditExpense, removeItem} = props;
	const editExpenseFilteredData = expenseData.filter(data => data.id == editExpenseId);
	const {description, amount, note, date} = editExpenseFilteredData[0];
	
	const submit = (e) => {
		e.preventDefault();
		addEditExpense(editExpenseId, {
			id: editExpenseId,
			description: _description.value,
			amount: parseInt(_amount.value),
			date: _date.value,
			note: _note.value
		})
		props.history.push('/dashboard')
	}
	const remove = (e) => {
		e.preventDefault();
		removeItem(editExpenseId)
		props.history.push('/dashboard');
	}
return (
	<div>
	<div className = 'page-header'>
		<div className ="content-container">
			<h1 className = 'page-header__title'>
				Edit Expense
			</h1>
		</div>
	</div>
	<div className = 'content-container'>	
		<div className = 'form-section'>
			<form className = 'form'>
				<label htmlFor = 'description'></label>
				<input type ="text" id ="description" defaultValue = {description} 
				placeholder = 'description' className = 'text-input' 
				ref = { input => _description = input  } required/>

				<label htmlFor = 'amount'></label>
				<input type ="number" id ="amount" placeholder ='amount'
				defaultValue ={amount}  className = 'text-input'
				ref = { input => _amount = input } required/>

				<label htmlFor = 'data'></label>
				<input type ="date" id ="date" placeholder = 'date'  className = 'text-input'
				defaultValue ={date} ref = {input => _date = input } required/>

				<label htmlFor = 'note'></label>
				<textarea type ="text" id ="note" placeholder = 'note'
				defaultValue = {note} className = 'textarea'
				ref = {input => _note = input } required/>

				<div><button className = 'button' type ="submit" onClick = {submit}> Save Expense</button></div>
				<div><button className = 'button button--secondary' type ="submit" onClick = {remove}> Remove </button></div>
			</form>
		</div>
	</div>
	</div>

	)
}