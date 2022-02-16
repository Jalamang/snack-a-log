import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    
      <nav >
         <button>
        <Link to="/snacks/" >
         Snacks
        </Link>
        </button>
        <button>
        <Link to="/snacks/new" >
          New Snack
        </Link>
        </button>
      </nav>
    
  );
}

export default Nav;
