/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import CurrentType from "../../components/CurentType/CurrentType";
import Sidebar from "../../components/Sidebar/Sidebar";
import FormRequest from "./FormRequest";
import FormCaseStatus from "./FormCaseStatus";
import { nanoid } from "nanoid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";

export default function Form() {
  const navigate = useNavigate();

  // const api = 'http://localhost:8001/api-help-desk/v1/request/create'
  // const api = 'http://localhost:2000/request'

  //============DATE TIME=================
  const today = new Date();
  const date =
    today.getFullYear() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getDate() +
    "";
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + "-" + time;
  //============DATE TIME=================

  ///------------------Ticket category------------------
  const [Incident] = useState(`In - ${nanoid(7)} - ${date}`);
  const [Problem] = useState(`Pr - ${nanoid(7)} - ${date}`);
  const [Request] = useState(`Rq - ${nanoid(7)} - ${date}`);
  ///------------------Ticket category------------------

  // const [Data] = useState("Delivery Status", "Tidak terima di HP");

  ///------------------category - subcategory------------------
  // const [subJenis, setSubJenis] = useState([]);

  // const jenisChangeHandler = (event) => {
  //   const idJenis = event.target.value;

  //   formData.map((value, i) => {
  //     if (idJenis === value.requestId) {
  //       setSubJenis(value.subJenis);
  //     }
  //   });
  // };

  //============USESTATE=================

  // const [page, setPage] = useState(0);

  const [name] = useState(localStorage.getItem("fullname"));

  const [formData, setFormData] = useState({
    ticket: "",
    caseowner: name,
    // customer: name,
    senderName: "",
    origin: "",
    date: dateTime,
    category: "",
    subcategory: "",
    title: "",
    description: "",
    action: "",
    file: "",
    casestatus: "",
  });

  //============USESTATE=================

  //============POST DATA=================
  console.log(localStorage.getItem("accessToken"));

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:8001/api-help-desk/v1/request/create",
        {
          ticket: formData.ticket,
          caseowner: formData.caseowner,
          customer: formData.customer,
          senderName: formData.senderName,
          origin: formData.origin,
          date: formData.date,
          category: formData.category,
          subcategory: formData.subcategory,
          title: formData.title,
          description: formData.description,
          action: formData.action,
          file: formData.file,
          casestatus: formData.casestatus,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.data.body.accessToken, "<<<<< access token");

        alert("Success");
      })
      .catch(function (error) {
        console.log(error);

        alert("Failure");
      });
  };
  //============POST DATA=================

  return (
    <div>
      <section id="form-incident" className="navbar bg-light">
        <nav className="form bg-light">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <Sidebar />
              </div>
              <div className="col-md-8 mx-auto">
                <CurrentType />

                <div className="col-md-8 me-auto">
                  <div className="card">
                    <div className="card-body">
                      {/* <h3>React Crud Using Jsonplaceholder</h3> */}
                      <div className="form">
                        <div className="progressbar">
                          {/* <div
                                style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}
                                ></div> */}
                        </div>
                        <div className="form-container">
                          <div className="header">
                            <h3 className="text-center">
                              <span style={{ fontWeight: "bold" }}>
                                {/* {FormTitles[page]} */}
                              </span>
                            </h3>
                          </div>

                          <div className="body">
                            {/* {PageDisplay()} */}
                            <FormCaseStatus
                              formData={formData}
                              setFormData={setFormData}
                              Incident={Incident}
                              Problem={Problem}
                              Request={Request}
                              handleSubmit={handleSubmit}
                              name={name}
                            />
                          </div>
                          <div className="footer">
                            <br />
                          </div>
                        </div>
                      </div>

                      <br />
                    </div>
                  </div>
                </div>

                {/* <div>
                        <List dataRequest={dataRequest}/>
                    </div> */}
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
