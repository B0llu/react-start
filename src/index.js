import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {books} from './books'

import Book from './book'
// above book can be named anything like Specificbook or Nobook it will still work as it is a export default. DO NOT FORGET TO CHANGE THE NAME IN RETURN TOO

import {greeting} from './testing/testing'

function BookList() {
  console.log(greeting)
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

//hosting

ReactDOM.render(BookList(), document.getElementById("root"));

// Another way to use props
// const Book = (props) => {
//   const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// Another way to use props
// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img} alt="" />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

// Another way to use props
// const Book = ({ img, title, author }) => {
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };
