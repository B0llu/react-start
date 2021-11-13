import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>Dhruv Samant</h2>
const Message = () => {
  return <p>Hi whats up man ?</p>
}

ReactDOM.render(Greeting(), document.getElementById('root'));