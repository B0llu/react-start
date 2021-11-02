import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = "Morgan Housel"; //using outside still works
const Book = () => {
  const title = "The Psychology of Money"; //can be used inside of function as well as outside
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDOM.render(BookList(), document.getElementById("root"));
