import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg"
    alt=""
  />
);
const Title = () => <h1>The Psychology of Money</h1>;
const Author = () => <h4>Morgan Housel</h4>;

ReactDOM.render(BookList(), document.getElementById("root"));
