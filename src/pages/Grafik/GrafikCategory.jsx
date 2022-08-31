import axios from 'axios';
import { data } from 'jquery';
import React, { useEffect, useState } from 'react'

function GrafikCategory() {

    const [IdCategory, setIdCategory] = useState([]);

    const getIdCategory = async () => {

        try {
            const response = await axios.get('http://localhost:8001/api-help-desk/v1/request/fetch', {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                }
              })
              .then((response)=> {

                console.log(response.data.body, "<<<<< access data");

                setIdCategory(response.data.body)
              })

              console.log(response)
            
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=> {
      getIdCategory();
    },[])

  return (
    <div>
        {IdCategory
        && 
        IdCategory.map((item, i) => {
          return <>
          <h3>
            {item.categoryId}
          </h3>
          </>
        }
        )}
    </div>
  )
}

export default GrafikCategory
