import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUsers] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((Response) => {
        if (Response.status >= 200 && Response.status <= 299) {
          return Response.json();
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error (Response.statusText)
        }
      })
      .then((user) => {
        const { login } = user;
        setUsers(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isloading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else if (isError) {
    return (
      <div>
        <h1>Error.....</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{user}</h1>
      </div>
    );
  }
};

export default MultipleReturns;
