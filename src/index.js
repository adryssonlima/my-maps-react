import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import Map from './components/Map';
import Footer from './components/Footer';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Map />, document.getElementById('map'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
