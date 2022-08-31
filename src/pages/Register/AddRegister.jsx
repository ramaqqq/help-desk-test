import React from "react";
// import './Register.css'
import {
  Button,
  Label,
  Input
} from "reactstrap";
import $ from "jquery";

 

const AddRegister = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(
      e.target.username.value,
      e.target.email.value,
      e.target.password.value
    );
      e.target.username.value    = "";
      e.target.email.value       = "";
      e.target.password.value    = "";
}

const tambahHandler = () => {
  $("#card-form").clone().appendTo("#row-card");
};

  return (
    <div>
    <div class="col-lg-2">
                <div class="box">kolom 1</div>
            </div>
      <form 
      className="row g-3"
      onSubmit={handleOnSubmit}>


        <div>
        <label for="inputPassword4" className="form-label">
          Username :
        </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              name="username"/>
        </div>

        <div>
        <label for="inputPassword4" className="form-label">
          Email :
        </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                name="email"/>
        </div>

        <div>
        <label for="inputPassword4" className="form-label">
          Password :
        </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              name="password"/>

        </div>

        {/* <div className="form-group">
                          <label htmlFor="">Name</label>
                          <input 
                           type="text" 
                           className="form-control" 
                           name="name" 
  
                           />
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Email</label>
                          <input 
                           type="text" 
                           className="form-control" 
                           name="email" 
                           
                           />
                        </div>

                        <div className="form-group mt-3">
                          <label htmlFor="">Comments</label>
                          <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea"
                          name="coment"
                          
                          ></textarea>
                        </div> */}
    
          <br />
          <br />
          <div>
          <Button
                      className="btn btn-danger btn-tambah mb-3"
                      type="button"
                      value="submit"
                      onClick={tambahHandler}
                      id="tambah"
                    >
                      Next 
              </Button>
              
              <Button onSubmit={handleOnSubmit} className="btn-escalate" type="submit">
                Add
              </Button>
          </div>
          <br />

      </form>
    </div>
  )
};

export default AddRegister;
