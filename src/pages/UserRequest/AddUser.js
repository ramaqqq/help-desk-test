import { nanoid } from "nanoid";
import React, { useState } from "react";
import {
  Button,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";
// import $ from "jquery";


const showdate=new Date();
const display=showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear();

const today = new Date();
const date =
  today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate() + "";
const time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date + "-" + time;


const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(
      e.target.ticket.value,
      e.target.caseowner.value,
      e.target.customer.value,
      e.target.sender.value,
      e.target.origin.value,
      e.target.date.value,
      e.target.category.value,
      e.target.subcategory.value,
      e.target.title.value,
      e.target.description.value,
      e.target.action.value,
      e.target.upload.value,
      e.target.casestatus.value
    );
      e.target.ticket.value      = "";
      e.target.caseowner.value   = "";
      e.target.customer.value    = "";
      e.target.sender.value      = "";
      e.target.origin.value      = "";
      e.target.date.value        = "";
      e.target.category.value    = "";
      e.target.subcategory.value = "";
      e.target.title.value       = "";
      e.target.description.value = "";
      e.target.action.value      = "";
      e.target.upload.value      = "";
      e.target.casestatus.value  = "";
}

// const handleDelete = (key) => {
//   setresponse((data) => data.filter((o) => o.id !== key));
// }; 

// const [show, setShow]=useState(false)

// const tambahHandler = () => {
//   $(".next").clone().appendTo(".ee");
// };

// const [modal, setmodal] = useState(false)

  return (
    <div className="col-lg-12">
      <form 
      className="row g-3"
      onSubmit={handleOnSubmit}>

        <div>
        <label for="inputState" className="form-label">
          #Ticket :
        </label>
            <select 
              id="inputState" 
              className="form-select"
              name="ticket"
              required
              >
              <option selected>Choose...</option>
              <option readOnly="true">In - {nanoid(7)} - {display}</option>
              <option readOnly="true">Pr - {nanoid(7)} - {display}</option>
              <option readOnly="true">Rq - {nanoid(7)} - {display}</option>
            </select>
        </div>      

        <div>
        <label for="inputPassword4" className="form-label">
          Case Owner :
        </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              name="caseowner"
              required
              />
        </div>

        <div>
        <label for="inputPassword4" className="form-label">
          Customer Name :
        </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                name="customer"
                required
                />
        </div>

        <div>
        <label for="inputPassword4" className="form-label">
          Sender Name :
        </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              name="sender"
              required
              />

        </div>

        <div>
        <label for="inputState" className="form-label">
            Origin :
        </label>
        <select 
              id="inputState" 
              className="form-select"
              name="origin"
              required
              >
              <option selected>Choose...</option>
              <option>Phone</option>
              <option>Whatsapp</option>
              <option>Email</option>
        </select>

        </div>

        <div>
        <label id="title" for="inputPassword4" className="form-label">
          Date Time :
        </label>
            <input 
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  name="date" 
                  value = {dateTime} 
                  readOnly="true"
                  />
        </div>

        <div>
        <label for="inputState" className="form-label">
            Category :
        </label>
              <select 
              id="inputState" 
              className="form-select"
              name="category"
              required
              >
                <option selected>Choose...</option>
                <option>Data</option>
                <option>Network</option>
                <option>Service</option>
                <option>Request</option>
              </select>
        </div>

        <div>
        <label for="inputState" className="form-label">
            Sub-Category :
        </label>
              <select 
                id="inputState" 
                className="form-select"
                name="subcategory"
                required
                >
                <option selected>Choose...</option>
                <option>Delivery Status</option>
                <option>Tidak terima di HP</option>
              </select>
        </div>
       
        <div>
        <label id="title" for="inputPassword4" className="form-label">
          Title :
        </label>
            <input 
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  name="title" 
                  required
                  />
        </div>
        

        <div>
        <label id="description" for="inputPassword4" className="form-label">
          Description :
        </label>
            <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="deskripsi"
                    name="description"
                    required
                    >  
            </textarea>
        </div>


        {/* <div className="ee">
        <div className="next"> */}

        {/* { show ? */}
        {/* <div > */}
        <div>
        <label for="inputPassword4" className="form-label">
          Action :
        </label>
            <input 
                  type="text"
                  className="form-control"
                  id="action"       
                  name="action"
                  required 
                  />
        </div>
        
        <div>
        <label for="formFile" className="form-label">
          Upload File :
        </label>
            <input        
                  name="upload" 
                  className="form-control"
                  type="file"
                  id="formFile"
                  required
                  />
        </div>

        <div>
        <label for="inputState" className="form-label">
          Case Status :
        </label>
            <select 
              id="inputState" 
              className="form-select"
              name="casestatus"
              required
              >
                <option selected>Choose...</option>
                <option>New</option>
                <option>Working</option>
                <option>Closed - Resolved</option>
                <option>Closed - Unresolved</option>
            </select>
        </div>  

        {/* <br /> */}
          <br />
          <div>
              <Button onSubmit={handleOnSubmit} className="btn-escalate" type="submit">
                Save
              </Button>
              {/* <Button className="btn-escalate" type="submit" onDelete={onDelete}>
                Edit
              </Button> */}

              {/* <Button
                      className="btn btn-danger btn-tambah mb-3"
                      type="button"
                      value="submit"
                      onClick={tambahHandler}
                      id="tambah"
                    >
                      Next 
              </Button> */}
          {/* </div> */}
          {/* <div>
              <Modal
              size='lg'
              isOpen={modal}
              toggle={() => setmodal(!modal)}
              >
                <ModalHeader
                toggle={() => setmodal(!modal)}
                >
                  Escalate - De-escalate
                </ModalHeader>
                <ModalBody>
                  <form>
                     <Row>

                        <Col lg={12}>
                        <div>
                          <label htmlFor="name">
                            Case Status :
                          </label>
                          <select 
                            id="inputState" 
                            className="form-select"
                            name="casestatus"
                            required
                            >
                            <option selected>Choose...</option>
                            <option readOnly="true">In-{display}</option>
                            <option readOnly="true">Pr-{display}</option>
                            <option readOnly="true">Rq-{display}</option>
                          </select>
                        </div>
                        </Col>

                     </Row>
                  </form>
                  <Button         
                    className="btn mt-3" 
                    color="primary"
                    onSubmit={handleOnSubmit}
                    >
                    Close
                  </Button>
                  &nbsp; 
                  <Button         
                    className="btn mt-3" 
                    color="primary"
                    >
                    Escalate
                  </Button>
                </ModalBody>
              </Modal>

              <Button         
              className="btn mt-3" 
              color="primary"
              onClick={()=>setmodal(true)}
              >
               Save
              </Button>
          </div> */}

        </div>
        {/* : null } */}

        {/* <div>
        <label for="inputState" className="form-label">
          Case Status
        </label>
            <select 
              id="inputState" 
              className="form-select"
              name="casestatus"
              required
              >
              <option selected>Choose...</option>
              <option readOnly="true">In-{display}</option>
              <option readOnly="true">Pr-{display}</option>
              <option readOnly="true">Rq-{display}</option>
            </select>
        </div>  */}

        {/* </div>
        </div> */}

          {/* <br />
          <div>
              <Button         
              onClick={() => setShow(currentShow => !currentShow)}
              className="btn-escalate" 
              type="submit"
              color="primary"
              >
               Add
              </Button>
          </div> */}


          {/* <div>
              <Modal
              size='lg'
              isOpen={modal}
              toggle={() => setmodal(!modal)}
              >
                <ModalHeader
                toggle={() => setmodal(!modal)}
                >
                  Escalate - De-escalate
                </ModalHeader>
                <ModalBody>
                  <form>
                     <Row>

                        <Col lg={12}>
                        <div>
                          <label htmlFor="name">
                            Case Status :
                          </label>
                          <select 
                            id="inputState" 
                            className="form-select"
                            name="casestatus"
                            required
                            >
                            <option selected>Choose...</option>
                            <option readOnly="true">In-{display}</option>
                            <option readOnly="true">Pr-{display}</option>
                            <option readOnly="true">Rq-{display}</option>
                          </select>
                        </div>
                        </Col>

                     </Row>
                  </form>
                  <Button         
                    className="btn mt-3" 
                    color="primary"
                    >
                    Close
                  </Button>
                  <Button         
                    className="btn mt-3" 
                    color="primary"
                    >
                    Escalate
                  </Button>
                </ModalBody>
              </Modal>

              <Button         
              className="btn mt-3" 
              color="primary"
              onClick={()=>setmodal(true)}
              >
               Save
              </Button>
          </div> */}


      </form>
    </div>
    
  )
};

export default AddUser;
