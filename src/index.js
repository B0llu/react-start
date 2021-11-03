import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg",
  title: "The Psychology of Money",
  author: "Morgan Housel",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/P/B01N5AX61W.01._SCLZZZZZZZ_SX500_.jpg",
  title: "Atomic Habits",
  author: "James Clear",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non
          eligendi porro asperiores necessitatibus sunt, quaerat nam harum
          consequatur animi.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
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
