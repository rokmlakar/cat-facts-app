import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';

export default function Pagination({loadNextPage, loadPrevPage, current}) {

  return(
    <div className='d-flex m justify-content-between'>
      {<button type='button' className='btn btn-primary btn-lg' onClick={loadPrevPage}>Previous</button>}
        <h1>{current}</h1>
      {loadNextPage && <button type='button' className='btn btn-primary btn-lg ' onClick={loadNextPage}>Next</button>}
    </div>
    
  ) 
}
