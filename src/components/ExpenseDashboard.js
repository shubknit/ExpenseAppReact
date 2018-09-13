import { Component } from 'react';
import { ExpenseHeader } from './ExpenseHeader';
import { ExpenseCount } from './ExpenseCount';
import { ExpenseList } from './ExpenseList';
import { AddExpense } from './AddExpense';
import { EditExpense } from './EditExpense';
import { ExpenseFilters } from './ExpenseFilters';
import uuid from 'uuid';


export class ExpenseDashboard extends Component {
	constructor() {
		super();
		let filteredData;
		this.saveState();
		this.addExpense = this.addExpense.bind(this);
		this.removeExpense = this.removeExpense.bind(this);	
		this.addEditExpense = this.addEditExpense.bind(this);	
		this.getFilteredData = this.getFilteredData.bind(this);	
	}
	saveState(){
		localStorage.getItem('expenseData') ? 
		this.state = {
			expenseList : JSON.parse(localStorage.getItem('expenseData')) 
		} : this.state = {
			expenseList: [
				
			]
		}
	}
	setLocalStorage(data){
		localStorage.setItem('expenseData', JSON.stringify(data));
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

	getFilteredData(data){
		this.filteredData = data;
		console.log(this.filteredData);
		this.forceUpdate();
	}
	componentDidUpdate(){
		this.filteredData = null;
		this.setLocalStorage(this.state.expenseList);
	}

	render(){
		const location = this.props.location.pathname;
		let  expenseString ;
	  if(location === '/dashboard') {
	  	expenseString = <div className = 'main-dashboard'>
			<ExpenseCount noOfExpenses = { this.state.expenseList.length } expenseTotal = { this.getExpenseTotal() }/>
			<ExpenseFilters expenseData = {this.state.expenseList} getFilteredData = {this.getFilteredData}/>
			<ExpenseList expenseList = { (!this.filteredData) ? this.state.expenseList : this.filteredData } removeItem = {this.removeExpense}/> </div>
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