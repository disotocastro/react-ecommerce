import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { createRoot } from 'react-dom/client';


// ReactDOM.render(<App />, document.getElementById('app'));

const root = createRoot(document.querySelector('#app'));
root.render(<App />);


// const root = createRoot(document.querySelector('#app');
// root.render(<App />)