import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <div className="Nav">
        <Link to="/snacks/new">
          <button>New </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
