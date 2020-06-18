import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PizzaProvider } from './contexts/PizzaContext';

ReactDOM.render(
  <PizzaProvider>
    <App />
  </PizzaProvider>,
  document.getElementById('root')
);