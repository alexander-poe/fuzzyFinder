import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/main-component';


document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<MainComponent />, 
		document.getElementById('app'))
);
