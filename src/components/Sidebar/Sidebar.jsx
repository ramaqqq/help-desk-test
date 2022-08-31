import React from "react";
// import Image from "../../assets/Vector.png";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import DownArrow from "@mui/icons-material/KeyboardArrowDown";
import List from "@mui/icons-material/ListAlt";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { Container } from "reactstrap";

// if (
//   localStorage.getItem("role") !== "USER" ||
//   localStorage.getItem("role") !== "ADMIN" ||
//   localStorage.getItem("role") !== "SUPERADMIN"
// ) {
//   console.log("no akses");
// } else {
//   console.log("sukses");
// }

export default function Sidebar() {
  const location = useLocation();
  let navigation = useNavigate();

  const logout = () => {
    // localStorage.removeItem("USER");
    localStorage.removeItem("role");
    navigation("/");
  };

  return (
    <div>
      <section id="sidebar">
        <div className="row">
          <div className="card">
            <div className="card-body">
              {/* <div className="sidebar-header">
                <div className="row"> */}
              <Container>
                {/* <div className="col-md-2 me-auto my-auto">
                    <img src={Image} alt="" />
                  </div> */}
              </Container>

              <br />
              <br />

              {localStorage.getItem("role") === "ADMIN" ||
              localStorage.getItem("role") === "USER" ? (
                <Link to="/form" style={{ textDecoration: "none" }}>
                  <div
                    className="sidebar-item mb-3 active"
                    activeClassname="active"
                  >
                    <div className="row">
                      <div className="col-md-2">
                        <DynamicFormIcon />
                      </div>
                      <div className="col-md-8">Form</div>
                      <div className="col-md-2">
                        <DownArrow />
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                ""
              )}

              {/* <Link to="/update" style={{ textDecoration: "none" }}>
                <div className="sidebar-item mb-3">
                  <div className="row">
                    <div className="col-md-2">
                      <List />
                    </div>
                    <div className="col-md-8">Form Update</div>
                    <div className="col-md-2">
                      <DownArrow />
                    </div>
                  </div>
                </div>
              </Link> */}

              {localStorage.getItem("role") === "USER" ? (
                <Link to="/report" style={{ textDecoration: "none" }}>
                  <div className="sidebar-item mb-3">
                    <div className="row">
                      <div className="col-md-2">
                        <List />
                      </div>
                      <div className="col-md-8">Report</div>
                      <div className="col-md-2">
                        <DownArrow />
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                ""
              )}

              {localStorage.getItem("role") === "ADMIN" ? (
                <Link to="/report-admin" style={{ textDecoration: "none" }}>
                  <div className="sidebar-item mb-3">
                    <div className="row">
                      <div className="col-md-2">
                        <List />
                      </div>
                      <div className="col-md-8">Report</div>
                      <div className="col-md-2">
                        <DownArrow />
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                ""
              )}

              {localStorage.getItem("role") === "SUPERADMIN" ? (
                <Link
                  to="/report-superadmin"
                  style={{ textDecoration: "none" }}
                >
                  <div className="sidebar-item mb-3">
                    <div className="row">
                      <div className="col-md-2">
                        <List />
                      </div>
                      <div className="col-md-8">Report</div>
                      <div className="col-md-2">
                        <DownArrow />
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                ""
              )}

              {localStorage.getItem("role") === "USER" ? (
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <div className="sidebar-item mb-3">
                    <div className="row">
                      <div className="col-md-2">
                        <List />
                      </div>
                      <div className="col-md-8">Register</div>
                      <div className="col-md-2">
                        <DownArrow />
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                ""
              )}

              {/* <Link to="/register" style={{ textDecoration: "none" }}>
                <div className="sidebar-item mb-3">
                  <div className="row">
                    <div className="col-md-2">
                      <List />
                    </div>
                    <div className="col-md-8">Register</div>
                    <div className="col-md-2">
                      <DownArrow />
                    </div>
                  </div>
                </div>
              </Link> */}

              {/* {localStorage.getItem("role") === "ADMIN" && localStorage.getItem("role") === "SUPER_ADMIN" ?
              <Link to="/register" style={{ textDecoration: "none" }}>
                <div className="sidebar-item mb-3">
                  <div className="row">
                    <div className="col-md-2">
                      <List />
                    </div>
                    <div className="col-md-8">Register</div>
                    <div className="col-md-2">
                      <DownArrow />
                    </div>
                  </div>
                </div>
              </Link> 
              : ""
            } */}

              {location.pathname !== "/" && (
                <Link
                  to="/"
                  onClick={logout}
                  style={{ textDecoration: "none" }}
                >
                  <div className="sidebar-item mb-3">
                    <div className="row">
                      <div className="col-md-2">
                        <List />
                      </div>
                      {/* {location.pathname !== "/" && (
                        <button onClick={logout}>logout</button>
                      )} */}
                      <div
                        className="col-md-8"
                        // onClick={logout}
                      >
                        Logout
                      </div>
                      <div className="col-md-2">
                        <DownArrow />
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
