import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/home.css";


const Home = () => {
  return (
    <div className="container">
      <div className="heading-container">
        <h1>Fun Facts about Space</h1>
        <p>Click a button to find out more</p>
      </div>
      <div className="buttons">
        <Link to="/fact-one"><button>Fact One</button></Link>
        <Link to="/fact-two"><button>Fact Two</button></Link>
        <Link to="/fact-three"><button>Fact Three</button></Link>
        <Link to="/"></Link>
      </div>
    </div>
  );
};

export default Home;
