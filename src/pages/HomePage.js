import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage">
      <h1>Welcome to Wonder Perspective Switcher</h1>
      <Link to="/read">Start Reading</Link>
    </div>
  );
}

export default HomePage;
