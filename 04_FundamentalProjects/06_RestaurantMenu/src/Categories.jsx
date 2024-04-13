import React from 'react'

const Categories = ({categ, func}) => {
  return (
    <div className='btn-container'>
      {categ.map((category) => {
    return (
    <button type='button' className='btn'
    key={category} onClick={() => func(category)}
    >
      {category}
      </button>
      );
    })}
    </div>
  );
};

export default Categories
