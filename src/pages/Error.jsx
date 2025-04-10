import React from "react";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log("error", error);
  return (
    <div>
      <h1>Error, page not found</h1>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};

export default Error;
