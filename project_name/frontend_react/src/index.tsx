import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

import('./tm').then((mod) => {
	console.log(mod);
});

ReactDOM.render(<App />, document.querySelector('#root'));
