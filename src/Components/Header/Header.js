import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Class One
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/class2">
                  Class Two
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/classprops">
                  Class Three Props
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/function">
                  Function Component
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/functionprops">
                  Function Props
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/state1">
                  State 1
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/state2">
                  State 2
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/state3">
                  State 3
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/state4">
                  State 4
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/state5">
                  State 5
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/state6">
                  State 6
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/state7">
                  State 7
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header