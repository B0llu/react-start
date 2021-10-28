import React from "react";
import ReactDom from "react-dom";

function greeting() {
  return <h1> This is bollu and this is my first component </h1>;
}

ReactDom.render(greeting(), document.getElementById("root"));
