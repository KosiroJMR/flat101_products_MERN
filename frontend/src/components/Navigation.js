import React, { Component } from "react";
import { Link } from "react-router-dom";
import flatIMG from '../img/flat101_product_management.png'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
          <img src={flatIMG} className="Flat101-Icon" alt="flatimg"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link"  to="/">
                <p id="button_nav">Products Panel</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link button_nav" to="/user">
              <p id="button_nav">Create User</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link button_nav" to="/create">
              <p id="button_nav">Create Product</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
