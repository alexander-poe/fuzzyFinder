import React from 'react';
import ReactDOM from 'react-dom';
import { MainComponent } from './client/components/main-component';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MainComponent />, div);
});