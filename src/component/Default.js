import React from "react";

export default function Default(props) {
  console.log(props);

  return (
    <div className="container">
      
        <div>
          <h1>404</h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>
            the requested URL{" "}
            <span>"{props.location.pathname}"</span> was
            not found
          </h3>
        </div>
      
    </div>
  );
}
