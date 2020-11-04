import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return(
    <nav>
      <ul>
        <li>
          <span area-hidden="true" role="img">
            &#127968;
          </span>
          <Link to="/">Home</Link>
        </li>
        <li>
          <span area-hidden="true" role="img">
            &#128216;
          </span>
          <Link to="/mynotes">My Notes</Link>
        </li>
        <li>
          <span area-hidden="true" role="img">
            &#127775;
          </span>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
