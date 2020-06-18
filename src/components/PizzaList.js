import React, { useContext } from 'react';
import { PizzaContext } from '../contexts/PizzaContext';
import { Pizza } from './Pizza';

export const PizzaList = () => {
    let { pizzas } = useContext(PizzaContext);
    return (
        <div className='pizzas'>
            {pizzas.map(pizza =>
                <Pizza key={pizza.id} data={pizza} />
            )}
        </div>
    )
}