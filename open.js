import React from 'react';
import './open.css';
function Portfolio() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Amatic+SC|Poiret+One" rel="stylesheet" />

      {/* Opening Page Home */}
      <div id="banner">
        <img
          src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Opening banner" />
        <div className="centered">
          <h1 id="openingtext"><button>Click Here</button></h1>
          <p id="openingtext2"></p>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;