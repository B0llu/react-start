import React, { useState } from "react";
import "./style.css"

const wordMeaning = {
  "Aiz": "Anything happenes say this",
  "Modi": "Modi hei to munkin hie",
  "Tapa Tap": "Bhau's best dialogue"
};

var wordsWeKnow = Object.keys(wordMeaning);

export default function App() {

  const [meaning, setMeaning] = useState("")

  function meaningInputHandler(event){
    var userInput = event.target.value;

    var meaning = wordMeaning[userInput]

    if (meaning === undefined) {
      meaning = "Nikal"
    }

    setMeaning(meaning)
  }

  function wordClickHandler(word){
    var meaning = wordMeaning[word];
    setMeaning(meaning) 
  }
  
  return (
    <div>
      <h1>Inside Out</h1>
     <input onChange={meaningInputHandler} type="text" />

     <h2>Meaning: {meaning}</h2>
     
     <h3>Words we know</h3>
     {
       wordsWeKnow.map(function(word) {
         return <span 
         onClick={()=> wordClickHandler(word)} 

          key={word} 

          style={{margin: "30px", cursor: "pointer"}}>{word}</span>
       })
     }
    </div>
  );
}
