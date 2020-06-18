import React, { useContext } from 'react';
import { PizzaList } from './components/PizzaList';
import { PizzaContext } from './contexts/PizzaContext';
import './App.scss';

function App() {
  let { restaurantName } = useContext(PizzaContext);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{restaurantName}</h1>
      </header>
      <PizzaList />
    </div>
  );
}

export default App;