import React, { useState } from "react";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var newLikeCounterValue = likeCounter + 1;
    setLikeCounter(newLikeCounterValue);
  }

  return (
    <div>
      <h1>Inside Out</h1>
      <button onClick={likeClickHandler}>Like Me!</button> {likeCounter}
    </div>
  );
}
