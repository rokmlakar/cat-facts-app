import React from 'react';

export default function FactList({fact}) {
  return(
    <ul className='list-group mb-5 mt-5'>
        {fact.map(cat => (
            <li className='list-group-item'  key={cat.fact}>{cat.fact}</li>
        ))}
    </ul>
  ) 
}
