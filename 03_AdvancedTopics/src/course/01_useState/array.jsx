import React, { useState } from 'react';
import { data } from '../../data';
export const UseStateArray = () => {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };
    const clearItems = () => {
        setPeople([]);
    };
    return(
        <div>
        {people.map((person)=>{
            const {id, name} = person
            return(
            <div key={id} className='item'>
                <h4>{name}</h4>
                <button onClick={() => {removeItem(id)}}>remove</button>
            </div>
            );
        })}
        <button className='btn'
        style={{ marginTop: '2rem' }}
        onClick={clearItems}>
            clear items
        </button>
        </div>
    );
};
