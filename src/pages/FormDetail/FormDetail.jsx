import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function FormDetail() {
    // `http://localhost:8001/api-help-desk/v1/request/fetch/${id}`

    const [formData, setFormData] = useState({
        ticket: "",
        caseOwner: "",
        customer: "",
        senderName: "",
        origin: "",
        date: "",
        categoryId: "",
        subCategoryId: "",
        title: "",
        description: "",
        action: "",
        file: "",
        caseStatus: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    // const loadUser = async () => {
    //     const res = await axios.get(`http://localhost:8001/api-help-desk/v1/request/fetch/${id}`);
    //     serFormData(res.data);
    // };

    const loadUser = async () => {
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
    }

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
                            <br /><br />

                            <div className="container py-4">
                                <Link className="btn btn-info" to="/report">
                                    <span style={{fontWeight: 'bold', color: '#f8f8f8'}}>
                                        back to Report
                                    </span>
                                </Link>
                                {/* <h1 className="display-4">User Id: {id}</h1>
                                <h1 className="display-4">Form Detail:</h1> */}
                                <ul className="list-group w-50">
                                <h1 className="display-8" >
                                    <hr />
                                    <span style={{ fontWeight: 'bold' }}>
                                        Form Detail:
                                    </span>
                                    <hr />
                                </h1>
                                    <li className="list-group-item">Ticket: &nbsp;
                                        <span style={{ 
                                            fontWeight: 'bold', 
                                            color: 'green', 
                                            // float: 'right' 
                                            }}>
                                            {formData.ticket}
                                        </span>
                                    </li>
                                    <li className="list-group-item">Case Owner: &nbsp;
                                        <span style={{ fontWeight: 'bold', color: 'black' }}>
                                            {formData.caseOwner}
                                        </span>
                                    </li>
                                    <li className="list-group-item">Customer: &nbsp;
                                        <span style={{ fontWeight: 'bold', color: 'black' }}>
                                            {formData.customer}
                                        </span>
                                    </li>
                                    <li className="list-group-item">Sender Name: &nbsp;
                                        <span style={{ fontWeight: 'bold', color: 'black' }}>
                                            {formData.senderName}
                                        </span>
                                    </li>
                                    <li className="list-group-item">Date Time: &nbsp;
                                        <span style={{ fontWeight: 'bold', color: 'black' }}>
                                            {formData.date}
                                        </span>
                                    </li>
                                    <li className="list-group-item">Category: &nbsp;
                                        <span style={{ fontWeight: 'bold', color: 'black' }}>
                                            {formData.categoryId}
                                        </span>
                                    </li>
                                    <li className="list-group-item">Sub-Category: &nbsp;
                                        <span style={{ fontWeight: 'bold', color: 'black' }}>
                                            {formData.subCategoryId}
                                        </span>
                                    </li>
                                    <li className="list-group-item">Title: &nbsp;
                                        <span style={{ fontWeight: 'bold', color: 'black' }}>
                                            {formData.title}
                                        </span>
                                    </li>
                                    <li className="list-group-item">Description: &nbsp;
                                        <span style={{ fontWeight: 'bold', color: 'black' }}>
                                            {formData.description}
                                        </span>
                                    </li>
                                    <li className="list-group-item">Action: &nbsp;
                                        <span style={{ fontWeight: 'bold', color: 'black' }}>
                                            {formData.action}
                                        </span>
                                    </li>
                                    <li className="list-group-item">Upload: &nbsp;
                                        <span style={{ fontWeight: 'bold', color: 'black' }}>
                                            {formData.file}
                                        </span>
                                    </li>
                                    <li className="list-group-item">Case Status: &nbsp;
                                        <span style={{ fontWeight: 'bold', color: 'black' }}>
                                            {formData.caseStatus}
                                        </span>
                                    </li>

                                </ul>
                            </div>


                        </div>

                    </div>
                    <br />
                    <br />
                </div>
            </section>
        </div>
    )
}
