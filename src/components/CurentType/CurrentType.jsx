import React, { useState } from "react";
import "./CurrentType.css";
import { Button, ButtonGroup } from "reactstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
export default function CurrentType() {
  let navigate = useNavigate();

  const refreshPage = (e) => {
    e.preventDefault();
    navigate("/form");
    navigate(0);
  };

  return (
    <div>
      <section id="navbar">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">
              Current Type &nbsp; &nbsp; &nbsp;
              <ButtonGroup>
                <Link to="/form" style={{ textDecoration: "none" }}>
                  <Button
                    className="btn-new"
                    color="primary"
                    onClick={refreshPage}
                  >
                    New
                  </Button>
                </Link>

                <Link to="/report" style={{ textDecoration: "none" }}>
                  <Button>Existing</Button>
                </Link>

                {/* &nbsp;
                  <Button onClick={refreshPage}>
                    Refresh
                  </Button> */}
              </ButtonGroup>
            </a>

            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </nav>
      </section>
    </div>
  );
}
