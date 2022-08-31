import { useState, useEffect } from "react";
import axios from "axios";

function Form(props) {

    const [form, setForm] = useState({
        userId: '',
        title: '',
        body: ''
    })

    const { userId, title, body } = form;

    const onChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    } 

    const HandleSubmit = event => {
        event.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: title,
            body: body,
            userId: userId,
          }).then(response => {

            console.log(response)

            alert("Success")
           
        }).catch(function (error) {
            console.log(error)

            alert("Failure")
        });

    }

    return (
        <>
            <div className="container">
                <div className="hero">
                    <div className="flex-container">
                        <div className="flex-item-left">
                            <img className="form-img" src="./assets/images/form.png" />
                        </div>
                        <div className="flex-item-right">
                            <div className="form">
                                <div className="title">
                                    <h2>Form</h2>
                                </div>

                                <form onSubmit={event => HandleSubmit(event)}>
                                    <div className="form-group">
                                        <label>User Id</label>
                                        <input type="text" id="jumlah" name="userId" onChange={onChange} value={userId} autoComplete="off" />
                                    </div>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text" id="jumlah" name="title" onChange={onChange} value={title} autoComplete="off" />
                                    </div>
                                    <div className="form-group">
                                        <label>Body</label>
                                        <input type="text" id="jumlah" name="body" onChange={onChange} value={body} autoComplete="off" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;