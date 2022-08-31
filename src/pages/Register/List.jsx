import React from "react";

//3                                              //6
export default function List({ data, handleEdit, handleDelet }) {
  return (
    <div className="list-group">
    {/* 4 */}
    {
      data.map((contact)=> {
        return (
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{contact.name}</h5>
          <div>
            {/* 5 */}
            <button onClick={() => handleEdit(contact.id)} className="btn btn-sm btn-link">Edit</button>
            <button onClick={() => handleDelet(contact.id)} className="btn btn-sm btn-link">Del</button>
          </div>
        </div>
        <p className="mb-1">{contact.telp}</p>
      </div>
        );
      })
    }
    
    </div>
  );
}
