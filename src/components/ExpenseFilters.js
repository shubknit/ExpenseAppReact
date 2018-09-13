export const ExpenseFilters = ({expenseData, getFilteredData}) => {

const filteredData = (event) => {
	var updatedData = expenseData.filter((data) => 
			data.description.toLowerCase().search(event.target.value.toLowerCase()) !== -1
	);
	getFilteredData(updatedData)
} 
 return (
 	<div className="content-container">
		<div className="input-group">
			<div className="input-group__item">
				<input type="text" className="text-input" placeholder="Search expenses"  onChange = {filteredData}/>
			</div>
			<div className="input-group__item">
				<select className="select">
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
			</div>
		</div>
	</div>
	)	
}