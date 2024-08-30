import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));

const root = createRoot(document.getElementById('root'));
root.render(<App tab="home" />);