import { data } from 'jquery'
import React, {useEffect, useState} from 'react'
import { Table } from 'reactstrap'

const api = 'http://localhost:2000/request'

export default function SearchFilter() {

    const [dataExisting, setDataExisting] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [Filter, setFilter] = useState('');

    useEffect(()=>{
        const fetchData=()=> {
            fetch(api)
            .then(response => response.json())
            .then(json => {
                setDataExisting(json)
                setSearchData(json)
            })
        }
        fetchData();
    },[])

    const handleFilter = (e) => {
        if (e.target.value === '') {
            setDataExisting(searchData)
        } else {
          const filterResult = searchData.filter(item => 
            item.ticket.toLowerCase().includes(e.target.value.toLowerCase()) || 
            item.sender.toLowerCase().includes(e.target.value.toLowerCase())
            )
            if(filterResult.length > 0) {
                setDataExisting(filterResult)
            } else {
                setDataExisting([{"ticket" : "No Data"}])
            }
          
        }
        setFilter(e.target.value)
    }

  return (
    <div>

        <div>
            <input 
                type="search"
                placeholder="Search" 
                value={Filter}
                onInput={(e)=>handleFilter(e)}/>
        </div>

        <Table>
                    <th scope="col">No</th>
                     <th scope="col">Ticket</th>
                     <th scope="col">Case Owner</th>
                     <th scope="col">Customer Name</th>
                     <th scope="col">Sender Name</th>
                     <th scope="col">Origin</th>
                     <th scope="col">Date Time</th>
                     <th scope="col">Category</th>
                     <th scope="col">Sub Category</th>
                     <th scope="col">Title</th>
                     <th scope="col">Description</th>
                     <th scope="col">Action</th>
                     <th scope="col">Upload</th>
                     <th scope="col">Case Status</th>

                     {dataExisting.map(item => {
                        return(
                       <tr key={item.userId}>
                            <th scope="row">{ item.id }</th>
                            <td>{ item.ticket }</td>
                            <td>{ item.caseowner }</td>
                            <td>{ item.customer }</td>
                            <td>{ item.sender }</td>
                            <td>{ item.origin }</td>
                            <td>{ item.date }</td>
                            <td>{ item.category }</td>
                            <td>{ item.subcategory }</td>
                            <td>{ item.title }</td>
                            <td>{ item.description }</td>
                            <td>{ item.action }</td>
                            <td>{ item.upload }</td>
                            <td>{ item.casestatus }</td>
                            <td>
                            {/* <span>
                                    <Button className="btn-escalate" type="submit">
                                        Delete
                                    </Button>
                            </span> */}
                            </td>
                       </tr>
                        )
                     })

                     }

        </Table>

    </div>
  )
}
