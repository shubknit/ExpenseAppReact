import uuid from 'uuid'

export const AddExpense = (props) => {
let _description , _date, _amount, _note;
const submit = (e) => {
	e.preventDefault();
	props.addNew({
		id: uuid.v1(),
		description: _description.value,
		amount: parseInt(_amount.value),
		date: _date.value,
		note: _note.value
	})
	props.history.push('/dashboard');	
}
return(
	<div>
	<div className ="page-header">
		<div className = 'content-container'>
			<h1 className = 'page-header__title'>Add Expense </h1>
		</div>
	</div>	
		<div className = 'content-container'>
			<form onSubmit = {submit} className = 'form'>
				<label htmlFor = 'description'></label>
				<input type ="text" id ="description" placeholder ='description' className = 'text-input' 
				ref = { input => _description = input  } required/>

				<label htmlFor = 'amount'></label>
				<input type ="number" id ="amount" placeholder ='amount' className = 'text-input'
				ref = { input => _amount = input } required/>

				<label htmlFor = 'data'></label>
				<input type ="date" id ="date" placeholder ='date' className = 'text-input'
				ref = {input => _date = input } required/>

				<label htmlFor = 'note'></label>
				<textarea type ="text" id ="note" placeholder ='note' className = 'textarea'
				ref = {input => _note = input } required/>
				<div><button  className = 'button' type ="submit"> Save Expense </button> </div>
			</form>
		</div>
	</div>

	)
}

