import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './routers/AppRouter'; 

window.React = React;

const jsx = (
	<AppRouter/>
)

ReactDOM.render(jsx, document.getElementById('app'))





