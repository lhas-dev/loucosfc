import 'bulma/css/bulma.css';
import './app/stylesheet/general.css';
import './app/stylesheet/login.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
