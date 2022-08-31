import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
// import Navbar from "../../components/Navbar/Navbar";
// import Sidebar from "../../components/Sidebar/Sidebar";
import { Button,  ButtonGroup} from 'reactstrap';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import CurrentType from '../../components/CurentType/CurrentType';
export default function ExistingUser() {

  const [data, setDataList] = useState([]);
 
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get('http://localhost:3000/request');
 
         setDataList(response.data);
       } catch (error) {
         console.error(error.message);
       }
     }
 
     fetchData();
   }, []);
 
 if (!localStorage.getItem("isAuthenticated")) {
   return <Navigate replace to="/"/>
 }

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
              {/* <CurrentType /> */}

              <div>
      <section id="navbar">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">

                Current Type
                &nbsp;  &nbsp;  &nbsp;
              <ButtonGroup>
                  {/* <Link to="/form" style={{ textDecoration: "none" }}> */}
                    <Button className="btn-new" color="primary">
                      New
                    </Button>
                  {/* </Link> */}

                  {/* <Link to="/existing" style={{ textDecoration: "none" }}> */}
                    <Button>
                      Existing
                    </Button>
                  {/* </Link> */}

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


  <div className="col-md-8 me-auto">
    <div className="card">
      <div className="card-body">

        <div className="list-group">
    
        <form 
      className="row g-3">
                  {data.map(value => (
                    <div className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                    <form key={value.userId}>
                      <p>{ value.id }</p>
                      <h5>
                            { value.ticket }
                      </h5>
                            <p className="mb-1">{ value.caseowner }  </p>
                            <p className="mb-1">{ value.customer }   </p>
                            <p className="mb-1">{ value.sender }     </p>
                            <p className="mb-1">{ value.origin }     </p>
                            <p className="mb-1">{ value.date }       </p>
                            <p className="mb-1">{ value.category }   </p>
                            <p className="mb-1">{ value.subcategory }</p>
                            <p className="mb-1">{ value.title }      </p>
                            <p className="mb-1">{ value.description }</p>
                            <p className="mb-1">{ value.action }     </p>
                            <p className="mb-1">{ value.upload }     </p>
            
                          <br />
                          <Button className="btn-escalate" type="submit">
                               Edit
                           </Button>
                           &nbsp;
                           &nbsp;
                           <Button className="btn-escalate" type="submit">
                               Delete
                           </Button>
                    
                    </form>
                    </div>
                    </div>
                  ))}
                  </form>
               
        </div>
      </div>
    </div>
  </div>

            </div>
          </div>       
        </div>  
      </nav>  
</section>

  </div>
              
  );
}
