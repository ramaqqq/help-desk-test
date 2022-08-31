import React from 'react'
import { Button } from 'reactstrap'

const EditTableRow = ({item, formData, setFormData, Incident, Problem, Request}) => {
  return (
    <tr>
        <td>{item.requestId}</td>
        <td>
            {/* <input 
                disabled
                type="text" 
                required="required" 
                placeholder="Ticket..." 
                name="ticket" 
                value={formData.ticket}
                onChange={(event) =>
                setFormData({ ...formData, 
                ticket: event.target.value })
                }
                /> */}
                <select 
                    id="inputState" 
                    className="form-select"
                    name="ticket"
                    value={formData.ticket}
                    onChange={(event) =>
                        setFormData({ ...formData, 
                        ticket: event.target.value })
                        }
                    required
                    >
                    <option selected>...</option>
                    <option readOnly="true">{Incident}</option>
                    <option readOnly="true">{Problem}</option>
                    <option readOnly="true">{Request}</option>
                </select>
        </td>
        <td>
            <input 
                type="text" 
                required="required" 
                placeholder="Case Owner..." 
                name="caseOwner" />
        </td>
        <td>
            <input 
                type="text" 
                required="required" 
                placeholder="customer..." 
                name="customer" />
        </td>
        <td>
            <input 
                type="text" 
                required="required" 
                placeholder="Sender Name..." 
                name="senderName" />
        </td>
        <td>
        <select 
                id="inputState" 
                className="form-select"
                name="origin"
                required
                value={formData.origin}
                onChange={(event) =>
                    setFormData({ ...formData, 
                    origin: event.target.value })
                    }
                >
                <option selected>...</option>
                <option>Phone</option>
                <option>Whatsapp</option>
                <option>Email</option>
            </select>
        </td>
        <td>
            <input 
                disabled
                type="text" 
                required="required" 
                placeholder="date..." 
                name="date" />
        </td>
        <td>
            <select 
              id="inputState" 
              className="form-select"
              name="categoryId"
              required
              value={formData.category}
              onChange={(event) =>
                setFormData({ ...formData, 
                category: event.target.value })
                }
              >
                <option selected>...</option>
                <option>Data</option>
                <option>Network</option>
                <option>Service</option>
                <option>Request</option>
              </select>
        </td>
        <td>
            <select 
                id="inputState" 
                className="form-select"
                name="subcategory"
                required
                value={formData.subcategory}
                onChange={(event) =>
                    setFormData({ ...formData, 
                    subcategory: event.target.value })
                    }
                >
                <option selected>...</option>
                <option>Delivery Status</option>
                <option>Tidak terima di HP</option>
                <option>Down</option>
                <option>Latency</option>
                <option>DB</option>
                <option>IO</option>
                <option>Diamond</option>
                <option>New Customer</option>
                <option>New Sender</option>
                <option>New DB</option>
              </select>
        </td>
        <td>
            <input 
                type="text" 
                required="required" 
                placeholder="Title..." 
                name="title" />
        </td>
        <td>
            <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="deskripsi"
                    name="description"
                    required
                    value={formData.description}
                    onChange={(event) =>
                        setFormData({ ...formData, 
                        description: event.target.value })
                        }
                    >  
            </textarea>
            {/* <input 
                type="text" 
                required="required" 
                placeholder="Description..." 
                name="decription" /> */}
        </td>
        <td>
            <input 
                type="text" 
                required="required" 
                placeholder="action..." 
                name="action" />
        </td>
        <td>
            <input 
                type="text" 
                required="required" 
                placeholder="file..." 
                name="file" />
        </td>
        <td>
            <select 
              id="inputState" 
              className="form-select"
              name="casestatus"
              required
              value={formData.casestatus}
              onChange={(event) =>
                setFormData({ ...formData, 
                casestatus: event.target.value })
                }
              >
                <option selected>...</option>
                <option>New</option>
                <option>Working</option>
                <option>Closed - Resolved</option>
                <option>Closed - Unresolved</option>
            </select>
        </td>
        <td>
            <Button type="submit" className="btn btn-info">
                Save
            </Button>
            <Button type="submit" className="btn btn-primary">
                Cancel
            </Button>
        </td>

    </tr>
  )
}

export default EditTableRow