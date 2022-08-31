import React from 'react'
import './user.css'

const User = ({id, 
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
              casestatus,
              onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{ticket}</span>
            <span>{caseowner}</span>
            <span>{customer}</span>
            <span>{sender}</span>
            <span>{origin}</span>
            <span>{date}</span>
            <span>{category}</span>
            <span>{subcategory}</span>
            <span>{title}</span>
            <span>{description}</span>
            <span>{action}</span>
            <span>{upload}</span>
            <span>{casestatus}</span>
            <br />
            <span>
                <button>
                    edit
                </button>
                <button onClick={handleDelete}>
                    delete
                </button>
            </span>
        </div>
    )
}

export default User
