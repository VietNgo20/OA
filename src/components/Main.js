import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <Link to="/posts">
        <button>Posts</button>
      </Link>
    </div>
  );
}
export default Main;
