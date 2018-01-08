import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './components/App.jsx';

// Require Sass file so webpack can build it
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import style from './styles/style.css';

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('root'));
