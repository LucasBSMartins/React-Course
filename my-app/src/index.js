import React from 'react'
import ReactDom from 'react-dom';

//CSS
import './index.css';

import {data} from './books.js'
import Book from './book.js'

function BookList() {
  return ( 
    <section className='booklist'> 
      {data.map((book)=> {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));