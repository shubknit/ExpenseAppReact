import { Link } from 'react-router-dom';
import HomeIcon from 'react-icons/lib/fa/home';

export const ExpenseHeader = () => (
	<header className ="header">
		<div className ="content-container">
			<div className = 'header__content'>
				<Link to= '/dashboard' className = 'header__title'>
					<HomeIcon/>
				</Link>
				<h1>Budget App </h1>
			</div>	
			
			 
		</div>
	</header>
)