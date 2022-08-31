import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const ReadOnlyRow = ({ item, handleEditClick }) => {
  return (
    <tr key={item.id}>
      <th scope="row">{item.requestId}</th>
      <td>{item.ticket}</td>
      <td>{item.caseOwner}</td>
      <td>{item.customer}</td>
      <td>{item.senderName}</td>
      <td>{item.origin}</td>
      <td>{item.date}</td>
      <td>{item.categoryId}</td>
      <td>{item.subCategoryId}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.action}</td>
      <td>{item.file}</td>
      <td>
        <span style={{ fontWeight: 'bold', color: 'green' }}>
          {item.caseStatus}
        </span>
      </td>
      <td>
        <span>
          <Link to="/form-update" style={{ textDecoration: "none" }}>
            <Button
              className="btn-escalate"
              color="primary"
              type="submit"
              //   onClick={() => 
              //                 setData(data.id, data.ticket, data.customer)}
              onClick={(event) => handleEditClick(event, item)}
            // onClick={()=> handleEdit(data.id)}
            >
              Update
            </Button>
          </Link>
        </span>
      </td>
    </tr>
  )
}

export default ReadOnlyRow