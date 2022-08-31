import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import { Button } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function FormUpdate() {

    //============DATE TIME=================
    const today = new Date();
    const datee =
        today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate() + "";
    const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = datee + "-" + time;

    console.log(dateTime);
    //============DATE TIME=================

    ///------------------Ticket category------------------
    const [Incident] = useState(`In - ${nanoid(7)} - ${datee}`);
    const [Problem] = useState(`Pr - ${nanoid(7)} - ${datee}`);
    const [Request] = useState(`Rq - ${nanoid(7)} - ${datee}`);
    ///------------------Ticket category------------------

    ///------------------category - subcategory------------------
    // const [subJenis, setSubJenis] = useState([]);

    // const jenisChangeHandler = (event) => {
    //   const idJenis = event.target.value;

    //   formData.map((value, i) => {
    //     if (idJenis === value.requestId) {
    //       setSubJenis(value.subJenis);
    //     }
    //   })
    // };

    let navigate = useNavigate();
    const { id } = useParams();

    console.log(id, '<<<<< id');

    const [formData, setFormData] = useState({
        ticket: "",
        caseOwner: "",
        customer: "",
        senderName: "",
        origin: "",
        date: dateTime,
        categoryId: "",
        subCategoryId: "",
        title: "",
        description: "",
        action: "",
        file: "",
        caseStatus: "",
    });

    const [defaultTicket, setDefaultTicket] = useState("")
    const [defaultOrigin, setDefaultOrigin] = useState("")
    const [defaultCategoryId, setDefaultCategoryId] = useState("")
    const [defaultSubCategoryId, setDefaultSubCategoryId] = useState("")

    const { ticket, caseOwner, customer, senderName,
        origin, date, categoryId, subCategoryId,
        title, description, action, file, caseStatus} = formData;
    const onInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const loadRequest = async () => {
        const result = await axios.get(`http://localhost:8001/api-help-desk/v1/request/fetch/${id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                }

            }
        );
        console.log(result.data.body, '<<<<< data');

        setFormData({
            ticket: result.data.body.ticket,
            caseOwner: result.data.body.caseOwner,
            customer: result.data.body.customer,
            senderName: result.data.body.senderName,
            origin: result.data.body.origin,
            date: result.data.body.date,
            categoryId: result.data.body.categoryId,
            subCategoryId: result.data.body.subCategoryId,
            title: result.data.body.title,
            description: result.data.body.description,
            action: result.data.body.action,
            file: result.data.body.file,
            caseStatus: result.data.body.caseStatus,
        });

        setDefaultTicket(result.data.body.ticket);
        setDefaultOrigin(result.data.body.origin);
        setDefaultCategoryId(result.data.body.categoryId);
        setDefaultSubCategoryId(result.data.body.subCategoryId);

    }

    useEffect(() => {
        loadRequest();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8001/api-help-desk/v1/request/update/${id}`, formData.append,
        {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }

        })
            .then((response) => {
                // console.log(response.data);
                // console.log(response.data.body.accessToken, '<<<<< access token')

                alert("Success");
                
                navigate("/report");
            })
            .catch(function (error) {
                console.log(error);

                alert("Failure");
            });

        
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

                                <div>
                                    <section id="navbar">
                                        <nav className="navbar bg-light">
                                            <div className="container-fluid">
                                                <a className="navbar-brand">
                                                    {/* <Link className="btn btn-primary m-5" to="/report">
                                                        back to Home
                                                    </Link> */}
                                                </a>

                                            </div>
                                        </nav>
                                    </section>
                                </div>

                                <div className="col-md-8 me-auto">
                                    <div className="card">
                                        <div className="card-body">
                                            <Link className="btn btn-info m-5" to="/report">
                                                <span style={{fontWeight: 'bold', color: '#f8f8f8'}}>
                                                    Back to report
                                                </span>
                                            </Link>


                                            <form
                                                className="row g-3"
                                                onSubmit={e => onSubmit(e)}
                                            >

                                                {/* <h3 className="text-center">
                                                    <span style={{ fontWeight: 'bold' }}>
                                                        Form Update:
                                                    </span>
                                                </h3> */}
                                                <h1 className="text-center display-8" >
                                                    <hr />
                                                    <span style={{ fontWeight: 'bold' }}>
                                                        Form Update:
                                                    </span>
                                                    <hr />
                                                </h1>

                                                <div>
                                                    <label for="inputState" className="form-label">
                                                        #Ticket :
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        name="ticket"
                                                        value={ticket}
                                                        onChange={e => onInputChange(e)}
                                                        required
                                                    >

                                                        {/* <option selected>Choose...</option> */}
                                                        <option selected
                                                            disabled
                                                            style={{ fontWeight: 'bold', color: 'green' }}>
                                                            Previously --{defaultTicket}--
                                                        </option>
                                                        <option readOnly="true">{Incident}</option>
                                                        <option readOnly="true">{Problem}</option>
                                                        <option readOnly="true">{Request}</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label for="inputPassword4" className="form-label">
                                                        Case Owner :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="caseOwner"
                                                        value={caseOwner}
                                                        onChange={e => onInputChange(e)}
                                                        required
                                                    // placeholder="Case Owner"
                                                    />
                                                </div>

                                                <div>
                                                    <label for="inputPassword4" className="form-label">
                                                        Customer Name :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="customer"
                                                        value={customer}
                                                        onChange={e => onInputChange(e)}
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
                                                        name="senderName"
                                                        value={senderName}
                                                        onChange={e => onInputChange(e)}
                                                        required
                                                    />
                                                </div>

                                                <div>
                                                    <label for="inputState" className="form-label">
                                                        Origin :
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        name="origin"
                                                        // value={origin}
                                                        onChange={e => onInputChange(e)}
                                                        required>
                                                        <option selected
                                                            disabled
                                                            style={{ fontWeight: 'bold', color: 'green' }}>
                                                            Previously --{defaultOrigin}--
                                                        </option>
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
                                                        name="date"
                                                        value={dateTime}
                                                        // onChange={e => onInputChange(e)}
                                                        readOnly="true"
                                                    />
                                                </div>

                                                <div>
                                                    <label for="inputState" className="form-label">
                                                        Category :
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        name="categoryId"
                                                        value={categoryId}
                                                        onChange={e => onInputChange(e)}
                                                        required
                                                    >
                                                        {/* <option selected>Choose...</option> */}
                                                        <option selected
                                                            disabled
                                                            style={{ fontWeight: 'bold', color: 'green' }}>
                                                            Previously --{defaultCategoryId}--
                                                        </option>
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
                                                        className="form-select"
                                                        name="subCategoryId"
                                                        value={subCategoryId}
                                                        onChange={e => onInputChange(e)}
                                                        required
                                                    >
                                                        {/* <option selected>Choose...</option> */}
                                                        <option
                                                            disabled
                                                            style={{ fontWeight: 'bold', color: 'green' }}>
                                                            Previously --{defaultSubCategoryId}--
                                                        </option>
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
                                                        name="title"
                                                        value={title}
                                                        onChange={e => onInputChange(e)}
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
                                                        name="description"
                                                        value={description}
                                                        onChange={e => onInputChange(e)}
                                                        required
                                                    >
                                                    </textarea>
                                                </div>

                                                <div>
                                                    <label for="inputPassword4" className="form-label">
                                                        Action :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="action"
                                                        value={action}
                                                        onChange={e => onInputChange(e)}
                                                        required

                                                    />
                                                </div>

                                                <div>
                                                    <label for="formFile" className="form-label">
                                                        Upload File :
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        name="file"
                                                        value={file}
                                                        onChange={e => onInputChange(e)}
                                                        // required

                                                    />
                                                </div>

                                                <div class="col">
                                                    <label for="inputState" className="form-label">
                                                        Case Status :
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        name="caseStatus"
                                                        value={caseStatus}
                                                        onChange={e => onInputChange(e)}
                                                        required

                                                    >
                                                        <option selected
                                                            disabled
                                                            style={{ fontWeight: 'bold', color: 'green' }}>
                                                            Previously --{caseStatus}--
                                                        </option>
                                                        <option>New</option>
                                                        <option>Working</option>
                                                        <option>Closed - Resolved</option>
                                                        <option>Closed - Unresolved</option>
                                                    </select>
                                                </div>

                                                <div></div>

                                                <Button variant="contained" color="primary"
                                                    className="btn-escalate" type="submit">
                                                    Update
                                                </Button>

                                            </form>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </section>

        </div>
    )
}
