import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Img from "../../assets/Left side panel.png";
import "./login.css";

// http://localhost:8001/api-help-desk/v1/auth/login
const api = "http://localhost:8001/api-help-desk/v1/auth/login";

function Login(props) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    // role: "",
    password: "",
  });

  const { email, password } = form;

  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("role", "ADMIN");
    localStorage.setItem("role", "USER");
    localStorage.setItem("role", "SUPERADMIN");

    // https://jsonplaceholder.typicode.com/posts
    // http://localhost:8001/api-help-desk/v1/auth/login
    axios
      .post(
        api,
        {
          email: email,
          // role: role,
          password: password,
        },
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.data.body.accessToken, "<<<<< access token");

        alert("Success");

        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("role", response.data.body.users.role);
        localStorage.setItem("accessToken", response.data.body.accessToken);
        localStorage.setItem("userId", response.data.body.users.userId);
        localStorage.setItem("fullname", response.data.body.users.fullname);

        navigate("/grafik");
      })
      .catch(function (error) {
        console.log(error);

        alert("Failure");
      });
  };

  return (
    <>
      <section id="login">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto">
              {/* <img src={Img} alt="" /> */}
            </div>
            <div className="col-md-6 my-auto">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">Help Desk System</div>
                  <div className="card-subtitle">Login to your account</div>
                  <form
                    onSubmit={(event) => {
                      HandleSubmit(event);
                    }}
                  >
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={email}
                        onChange={onChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        value={password}
                        onChange={onChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-info">
                      <span style={{ fontWeight: "bold", color: "#f8f8f8" }}>
                        Submit
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
