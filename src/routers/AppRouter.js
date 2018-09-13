import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ExpenseDashboard } from '../components/ExpenseDashboard';
import { PageNotFound } from '../components/PageNotFound';

export const AppRouter = () => (
	<BrowserRouter>
		<Switch>
				<Route path = '/dashboard' component = { ExpenseDashboard }/>
				<Route path = '/create' component = { ExpenseDashboard }/>
				<Route path = '/edit/:id' component ={ ExpenseDashboard }>
				
				</Route>
				<Route path = '*' component={PageNotFound} />
		</Switch>
	</BrowserRouter>
)

