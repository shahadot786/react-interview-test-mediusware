import React from "react";
import { Link } from "react-router-dom";

const Problem2 = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <Link
            to="/modal-a"
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </Link>
          <Link
            to="/modal-b"
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
