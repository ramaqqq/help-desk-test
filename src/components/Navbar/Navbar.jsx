import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <section id="navbar">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Current report Ticket</a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </section>
    </div>
  );
}
