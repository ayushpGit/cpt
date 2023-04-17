import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import Nav from "../components/nav";

const notFound = () => {
  return (
    <>
      <Nav />
      <div className="notFound">
        <h1>404</h1>
        <p>That page doesnt exist.</p>
        <Link to="/" className="link-button">
          {/* <BsFillArrowLeftCircleFill />&nbsp; */}
          Go Back
        </Link>
      </div>
    </>
  );
};

export default notFound;
