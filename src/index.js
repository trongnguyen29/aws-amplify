import React, {Component} from 'react'
import {render} from 'react-dom'

let bookList = [
  {"title": "The life of the Mind", "author":"Hannah ", "pages": 300},
  {"title": "The Sun Also Rises", "author":"Ernest Hemingway", "pages": 260},
  {"title": "White Teeth", "author":"Zadie Smith", "pages": 480},
  {"title": "Cat's Craddle", "author":"Kurt Vonnegut", "pages": 304}
]
const Book = ({title, author, pages}) => {
  return(
    <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>Pages: {pages} pages</p>
    </section>
  )
}

const Library = ({books}) => {
  return(
    <div>
      {books.map(
        book => <Book title={book.title} author={book.author} pages={book.pages}></Book>
      )}
    </div>
  )
}
render(
  <Library books={bookList}/>
  ,
  document.getElementById('root')
)