import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Button, Form } from "reactstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Register.css";

// const url = 'http://localhost:8001/api-help-desk/v1/request/create'
// const navigate = useNavigate();
// navigate("/grafik");

const Register = () => {
  // else return <Redirect to={redirectTo || "/404"} />;

  // if (localStorage.getItem("role") !== "ADMIN") {
  //   console.log("<<<<<<< no akses");
  //   // navigate("/");
  // } else {
  //   console.log("sukses");
  // }

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
  });
  //============USESTATE=================

  const { fullname, email, password, role } = formData;
  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //============POST DATA=================
  console.log(localStorage.getItem("accessToken"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "http://localhost:8001/api-help-desk/v1/users/create",
        formData
        // , {
        //   headers: {
        //     Authorization: "Bearer " + localStorage.getItem("accessToken"),
        //   },
        // }
      )
      .then((response) => {
        console.log(response.data, "<<<<< access data");
        console.log(response.data.body.accessToken, "<<<<< access token");

        // setFormData({
        //   fullname: response.data.body.fullname,
        //   email: response.data.body.email,
        //   password: response.data.body.password,
        //   status: response.data.body.status,
        //   role: response.data.body.role,
        // });

        // setFormData(response.data.body);

        alert("Success");
      })
      .catch(function (error) {
        console.log(error);

        alert("Failure");
      });
  };
  //============POST DATA=================

  return (
    <>
      <section id="table-incident">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-8 mx-auto">
              {/* <Navbar /> */}
              <br />
              <br />

              <div className="body">
                <div className="container">
                  <div
                    className="w-75 mx-auto p-5"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="card-title">
                      <span style={{ fontWeight: "bold", color: "green" }}>
                        Help Desk System
                      </span>
                    </div>
                    <div className="card-subtitle m-6s">
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        User Management
                      </span>
                    </div>

                    <form className="row g-3" onSubmit={handleSubmit}>
                      {/* <div>
                        <label for="inputPassword4" className="form-label">
                          Name :
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                          name="nama"
                          // value={formData.caseowner}
                          // onChange={(event) =>
                          //   setFormData({ ...formData, 
                          //   caseowner: event.target.value })
                          //   }
                          required
                        />
                      </div> */}

                      <div>
                        <label for="inputPassword4" className="form-label">
                          Username :
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                          name="fullname"
                          value={fullname}
                          onChange={(e) => onInputChange(e)}
                          required
                        />
                      </div>

                      <div>
                        <label for="inputPassword4" className="form-label">
                          Email :
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                          name="email"
                          value={email}
                          onChange={(e) => onInputChange(e)}
                          required
                        />
                      </div>

                      <div>
                        <label for="inputPassword4" className="form-label">
                          Password:
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                          name="password"
                          value={password}
                          onChange={(e) => onInputChange(e)}
                          required
                        />
                      </div>

                      {/* <div>
                        <label for="inputState" className="form-label">
                          Status :
                        </label>
                        <select
                          id="inputState"
                          className="form-select"
                          name="status"
                          value={status}
                          onChange={e => onInputChange(e)}
                          required
                        >
                          <option selected>Choose...</option>
                          <option>Active</option>
                          <option>Non Active</option>
                        </select>
                      </div> */}

                      <div>
                        <label for="inputState" className="form-label">
                          Position :
                        </label>
                        <select
                          id="inputState"
                          className="form-select"
                          name="role"
                          value={role}
                          onChange={(e) => onInputChange(e)}
                          required
                        >
                          <option selected>...</option>
                          {/* <option>Level 1</option>
                          <option>Level 2</option>
                          <option>Level 3</option>
                          <option>Level 4</option> */}
                          <option>USER</option>
                          <option>ADMIN</option>
                          <option>SUPERADMIN</option>
                        </select>
                      </div>

                      <Button
                        variant="contained"
                        color="primary"
                        // onSubmit={handleOnSubmit}
                        className="btn-escalate"
                        type="submit"
                      >
                        Register
                      </Button>

                      {/* <div></div>   */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </section>
    </>
  );
};

export default Register;
