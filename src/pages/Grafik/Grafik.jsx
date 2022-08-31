import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

// if (
//   !localStorage.getItem("role") !== "ADMIN" ||
//   !localStorage.getItem("role") !== "SUPERADMIN" ||
//   !localStorage.getItem("role") !== "USER"
// ) {
//   console.log("no akses");
// } else {
//   console.log("sukses");
// }

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 3,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Bar Chart by Report",
      // fontSize: 10,
    },
  },
};

const Grafik = () => {
  const [name] = useState(localStorage.getItem("fullname"));

  const [datasetOpen, setDatasetOpen] = useState([]);
  const [datasetClosed, setDatasetClosed] = useState([]);
  const [label, setLabel] = useState([]);
  // console.log(datasetClosed, "<<<<<<< close");
  // console.log(datasetOpen, " open >>>>>>");
  // console.log("label >>>>>>>>>", label);

  const fetchData = async () => {
    try {
      const response = await axios
        .get("http://localhost:8001/api-help-desk/v1/request/summary", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          const res = response.data.body;

          var label = [];
          var datasetOpen = [];
          var datasetClosed = [];

          for (var i = 0; i < res.length; i++) {
            if (res[i].categoryName !== "") {
              label.push(res[i].categoryName);

              if (res[i].caseStatus === "open") {
                datasetOpen.push(res[i].total);
              }

              if (res[i].caseStatus === "resolved") {
                datasetClosed.push(res[i].total);
              }
            }
          }

          var unique = (value, index, self) => {
            return self.indexOf(value) === index;
          };

          var uniqueLabel = label.filter(unique);

          setLabel(uniqueLabel);
          setDatasetOpen(datasetOpen);
          setDatasetClosed(datasetClosed);

          console.log(unique, "<<<<<< unique");

          // console.log("grafik >>>>>", response.data);
          // console.log(response.data.body, "<<<<< access grafik");
        });

      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const labels = label;
  const data = {
    labels,
    datasets: [
      {
        label: "OPEN",
        data: datasetOpen,
        borderColor: "#1F4690",
        backgroundColor: "#1F4690",
      },
      {
        label: "CLOSED",
        data: datasetClosed,
        borderColor: "#FFA500",
        backgroundColor: "#FFA500",
      },
    ],
  };

  return (
    <div>
      <section id="table-incident">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-8 mx-auto">
              {/* <Navbar /> */}

              <br />

              <h2>
                <hr />
                Welcome Help Desk System - &nbsp;
                <span style={{ fontWeight: "bold", color: "green" }}>
                  {name}
                </span>
                <hr />
              </h2>

              <br />
              <br />
              <br />

              <div style={{ width: "80%", height: "50%" }}>
                <Bar data={data} options={options} />
                <div>
                  <span>
                    <Link
                      to="/report"
                      style={{ textDecoration: "none" }}
                      className="btn btn-info m-2"
                    >
                      Report
                    </Link>

                    <Link
                      to="/form"
                      style={{ textDecoration: "none" }}
                      className="btn btn-primary"
                    >
                      New
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </section>
    </div>
  );
};

export default Grafik;
