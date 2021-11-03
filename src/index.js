import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book name="Dhruv" />
      <Book surname="samant" />
    </section>
  );
}

const Book = (props) => {
  const firstBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel"
  }
  //the const can be used inside of function as well as outside, they work in both conditions
  const title = "The Psychology of Money";
  const author = "Morgan Housel";
  const img = "https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg"
    
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(BookList(), document.getElementById("root"));
