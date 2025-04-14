import React from "react";
import { Link, useRouteError } from "react-router-dom";
import NotFound from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
const Error = () => {
  const error = useRouteError();
  console.log("error", error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={NotFound} alt="page not found" />
          <h3>Ohh! page not found</h3>
          <p>we can't seem to find the page you are looking for</p>
          <Link to="/dashboard">Go back to homepage</Link>
        </div>
      </Wrapper>
    );
  }
};

export default Error;
