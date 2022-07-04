import React from "react";
import {Link} from 'react-router-dom';
import header from './Header.css';


export default function Header() { 

  return (
   <div className="nav">
    <nav className="navbar navbar-expand-lg ">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/users"> Users</Link>
          </li>
          <li className="nav-item">
            <Link to="/"> Todo</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

