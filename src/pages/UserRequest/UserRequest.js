import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import User from "./User";
// import React from "react";
import {
  Button,
  Label,
  Input
} from "reactstrap";
// import DatePicker from 'react-date-picker';
// import { nanoid } from 'nanoid'
// import { Link } from "react-router-dom";
import CurrentType from "../../components/CurentType/CurrentType";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getValue } from "@testing-library/user-event/dist/utils";
// import List from "./List";
// import { Functions, Today, WebRounded } from "@mui/icons-material";
// import { uid } from "uid";

//get
const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    await fetch("http://localhost:3000/request")
      .then((res)   => res.json())
      .then((data)  => setUsers(data))
      .catch((err)  => {
        console.log(err);
      })
  }

//add
const onAdd = async (
  ticket, 
  caseowner, 
  customer, 
  sender, 
  origin, 
  date, 
  category,
  subcategory,
  title, 
  description, 
  action, 
  upload,
  casestatus) => {
    await fetch("http://localhost:3000/request", {
      method: "POST",
      body: JSON.stringify({
        ticket      :ticket,
        caseowner   :caseowner,
        customer    :customer,
        sender      :sender,
        origin      :origin,
        date        :date,
        category    :category,
        subcategory :subcategory,
        title       :title,
        description :description,
        action      :action,
        upload      :upload,
        casestatus  :casestatus
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((res) => {
      if (res.status !== 201) {
        return
      } else {
        return res.json();
      }
    })
    .then((data) => {
      setUsers((users) => [...users, data]);
    })
    .catch((err) => {
      console.log(err);
    });
  }

//delet
  const onDelete = async (id) => {
    await fetch(`http://localhost:3000/request/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          )
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }


console.log(users)

const nomer = [
  {id: 1}
]

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
                    {/* <CaseStatus /> */}
                    <div className="col-md-8 me-auto">
                      <div className="card">
                        <div className="card-body">

                        {/* <h3>React Crud Using Jsonplaceholder</h3> */}

                        <br />
                        <AddUser 
                          onAdd={onAdd} 
                          nomer={nomer} 
                          // onDelete={onDelete}
                          // nextStep={this.nextStep}  
                          />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>       
              </div>  
            </nav>  
      </section>


      {/* <h3>React Crud Using Jsonplaceholder</h3>

      <br />
      <AddUser onAdd={onAdd} />
      <div>
      {users.map((user) => (
          <User
            id          ={user.id}
            // key={user.id}
            ticket      ={user.ticket}
            caseowner   ={user.caseowner}
            customer    ={user.customer}
            sender      ={user.sender}
            origin      ={user.origin}
            date        ={user.date}
            category    ={user.category}
            subcategory ={user.subcategory}
            title       ={user.title}
            description ={user.description}
            action      ={user.action}
            upload      ={user.upload}
            onDelete    ={onDelete}
          />

        ))}
      </div> */}


    </div>
  )
}

export default App
