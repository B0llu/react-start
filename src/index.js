import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/P/B01N5AX61W.01._SCLZZZZZZZ_SX500_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} book={book}></Book>
        )
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

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
