import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./TableIncident.css";
import DataTable from 'react-data-table-component'


const TableRequestAdmin = () => {
  // let api = 'http://localhost:8001/api-help-desk/v1/request/fetch'

  const [formData, setFormData] = useState([]);

  //==========GET DATA==============
  //  useEffect(() => {         
  const getData = async () => {

    try {
      const response = await axios.get(
        'http://localhost:8001/api-help-desk/v1/request/fetch', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
      })
        .then((response) => {
          console.log('data >>>>>', response.data);
          console.log(response.data.body, '<<<<< access tabel')

          setFormData(response.data.body);

        })

      //  setData(response.data.body);
      console.log(response)
    } catch (error) {
      console.error(error.message);
    }
  }

  const columns =
    [
      {
        name: <span style={{ fontWeight: 'bold', color: 'black' }}>No</span>,
        selector: (item, i) => <span style={{ fontSize: '15px', color: 'black' }}>{i + 1}</span>,
        // sortable: true,
      },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Ticket</span>,
        selector: (item) => item.ticket,
        sortable: true,
      },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Case Owner</span>,
        selector: (item) => <span style={{ fontSize: '15px', color: 'black' }}>{item.caseOwner}</span>,
        sortable: true,

      },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Customer Name</span>,
        selector: (item) => item.caseOwner,
        sortable: true,
      },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Sender Name</span>,
        selector: (item) => item.senderName,
        sortable: true,          
      },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Origin</span>,
        selector: (item) => item.origin,
        sortable: true,        
      },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Date Time</span>,
        selector: (item) => item.date,
        sortable: true,
      },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Categori</span>,
        selector: (item) => item.ticket,
        sortable: true,
      },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Sub Category</span>,
        selector: (item) => item.ticket,
        sortable: true,
      },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>title</span>,
        selector: (item) => item.title,
        sortable: true,
      },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Description</span>,
        selector: (item) => item.description,
        sortable: true,
      },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Action</span>,
        selector: (item) => item.action,
        sortable: true,
      },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>File</span>,
        selector: (item) => item.file,
        sortable: true,
      },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Case Status</span>,
        selector: (item) => item.caseStatus,
        sortable: true,
      },
      // {
      //   name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Update</span>,
      //   cell: (item) =>
      //     <span>
      //       <Link
      //         to={`/report/update/${item.requestId}`}
      //         style={{ textDecoration: "none" }}
      //         className="btn btn-outline-primary">
      //         Update
      //       </Link>
      //     </span>,
      //     sortable: false,

      // },
      {
        name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Detail</span>,
        cell: (item) =>
          <span>
            <Link
              to={`/report/detail/${item.requestId}`}
              style={{ textDecoration: "none" }}
              className="btn btn-primary">
              Detail
            </Link>
          </span>,
          sortable: false,
      },
      // {
      //   name: <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Delete</span>,
      //   cell: (item) =>
      //     <span>
      //       <Link
      //         to="/report"
      //         style={{ textDecoration: "none" }}
      //         className="btn btn-danger"
      //         onClick={() => deleteRequest(item.requestId)}
      //       >
      //         Delete
      //       </Link>
      //     </span>,
      //     sortable: false,
      // },
    ]

  useEffect(() => {
    getData();
  }, [])
  //==========GET DATA==============


  const deleteRequest = async id => {
    await axios.delete(`http://localhost:8001/api-help-desk/v1/request/delete/${id}`,
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
      }
    );
    getData();
  };

  return (

    <div>
      {/* {console.log(data, '<<<< array data')} */}
      <section id="table-incident">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-8 mx-auto">
              {/* <Navbar /> */}

              <br />
              <DataTable
                title=
                {<h2 className="display-8" >
                  <span style={{ fontWeight: 'bold' }}>
                  Current report Ticket
                  </span>
                </h2>}
                columns={columns}
                data={formData}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='500px'
                // selectableRows
                // selectableRowsHighlight
                highlightOnHover
                actions=
                {
                  <span>
                    <Link
                      to="/form"
                      style={{ textDecoration: "none" }}
                      className="btn btn-info"
                    >
                      Add Ticket
                    </Link>
                  </span>
                }
                subHeader
                subHeaderComponent={
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search here..."
                      // value={search}
                      // onChange={(e) =>setSearch(e.target.value)}
                      />
                  </form>
                }
                subHeaderAlign="left"
              />

            </div>
          </div>
          <br />
          <br />
        </div>
      </section>
    </div>
  )
}

export default TableRequestAdmin
