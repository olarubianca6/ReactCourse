import { useState } from "react";

export const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: "peter",
        age: 28,
        hobby: 'reading',
    });
    const nextPerson = () => {
        setPerson({name: 'john', age: 30, hobby: 'boxing'})
    }
    return (
        <>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h4>enjoys {person.hobby}</h4>
        <button className="btn" onClick={nextPerson}>show next person</button>
        </>
    );

}