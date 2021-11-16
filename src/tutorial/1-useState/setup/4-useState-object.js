import React, { useState } from "react";

const UseStateObject = () => {
  // first way
  // const [person, setPerson] = useState({
  //   name: "Dhruv",
  //   age: 20,
  //   message: "Tapa Tap",
  // });

  //second way
  const [name, setName] = useState("Dhruv");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Tapa Tap");

  const changeMessage = () => {
    // setPerson({ ...person, message: "Sochna padta he re konsi gali du" });
    setMessage("Sochna padta he re konsi gali du");
  };
  return (
    <>
      <h3>{name}</h3> 
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
