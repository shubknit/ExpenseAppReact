import { Component } from 'react';
import { ExpenseHeader } from './ExpenseHeader';
import { ExpenseCount } from './ExpenseCount';
import { ExpenseList } from './ExpenseList';
import { AddExpense } from './AddExpense';
import { EditExpense } from './EditExpense';
import uuid from 'uuid';

export class ExpenseDashboard extends Component {
	constructor() {
		super();
		this.state = {
			expenseList: [
				{
					id: uuid.v1(),
					description: 'text1',
					date: '01/2/2019',
					amount: 1000,
					note: 'note1'

				},
				{
					id: uuid.v1(),
					description: 'text2',
					date: '01/2/2020',
					amount: 12000,
					note: 'note2'

				}
			]
		}
		this.addExpense = this.addExpense.bind(this);
		this.removeExpense = this.removeExpense.bind(this);	
		this.addEditExpense = this.addEditExpense.bind(this);	
	}
	getExpenseTotal(){
		let amount = 0 ;
	 	const { expenseList } = this.state;
	 	for( let i = 0 ; i< expenseList.length; i++){
	 		amount += expenseList[i].amount;
	 	}
	 	return amount;
	}

	addExpense(newExpense){
		this.setState({
			expenseList: [...this.state.expenseList, newExpense]
		})
	}

	removeExpense(itemId){
		var updateData = this.state.expenseList.filter((data) =>  data.id !== itemId)
		this.setState({
			expenseList: updateData
		})
	}

	addEditExpense(itemId, editExpenseData){
		var expenseData = this.state.expenseList;
		expenseData.forEach(function(obj,i){
			if(obj.id == itemId){
				expenseData[i].description = editExpenseData.description;
				expenseData[i].amount = editExpenseData.amount;
				expenseData[i].note = editExpenseData.note;
			}
		});	
		this.setState({
				expenseList: expenseData
		})			
	}

	render(){
		const location = this.props.location.pathname;
		let  expenseString ;
	    if(location === '/dashboard') {
			expenseString = <div className = 'main-dashboard'>
			<ExpenseCount noOfExpenses = { this.state.expenseList.length } expenseTotal = { this.getExpenseTotal() }/>
				<ExpenseList expenseList = { this.state.expenseList } removeItem = {this.removeExpense}/> </div>
		}
		else if(location === '/create'){
			expenseString = <AddExpense addNew = {this.addExpense} {...this.props}/>
		}
		else {
			expenseString = <EditExpense expenseData = {this.state.expenseList} editExpenseId = {this.props.match.params.id}
			 addEditExpense = {this.addEditExpense} removeItem = {this.removeExpense} {...this.props}/>
		}
		return (
			<div className = "main">
				<ExpenseHeader/>
				{ expenseString }
				
			</div>
		)

	}

}