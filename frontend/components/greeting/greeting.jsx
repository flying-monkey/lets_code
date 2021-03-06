import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="header-buttons">

    <Link to="/cities">
      <button className="sign-button">Cities</button>
    </Link>

    <Link to="/hosting">
      <button className="sign-button">Hosting</button>
    </Link>

    <Link to="/dashboard">
      <button className="sign-button">Dashboard</button>
    </Link>

    <Link to="/signin">
      <button className="sign-button">Sign In</button>
    </Link>

    <Link to="/signup">
      <button className="sign-button">Sign Up!</button>
    </Link>

  </nav>


);

const endsessionLink = (currentUser, signout) => (
	<nav className="header-buttons">
    <Link to="/cities">
      <button className="sign-button">Cities</button>
    </Link>

    <Link to="/hosting">
      <button className="sign-button">Hosting</button>
    </Link>

    <Link to="/dashboard">
      <button className="sign-button">Dashboard</button>
    </Link>

    <button className="sign-button" onClick={signout}>Sign Out</button>
	</nav>
);

const Greeting = ({ currentUser, signout }) => (
  currentUser ? endsessionLink(currentUser, signout) : sessionLinks()
);

export default Greeting;
