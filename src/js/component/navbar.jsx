import React from "react";

//create your first component
const Navbar = () => {
	return (


<nav className="navbar navbar-expand-lg navbar-light bg-light bg-success">
  <a className="navbar-brand" href="#">Start Bootsrap</a>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
   
  </div>
</nav>
    );
};


export default Navbar;











