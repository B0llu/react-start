import React from 'react'

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("hello world");
  };
  return (
    <article className="book" onMouseOver={() => console.log(title)}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4 onClick={clickHandler}>{author}</h4>
    </article>
  );
};

export default Book
