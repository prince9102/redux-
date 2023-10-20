import React from 'react'
import axios from 'axios'
import  { useEffect, useState } from 'react'

const DeleteRecord = () => {
    const [data , setdata] = useState([])

    useEffect(()=>{

        axios.get('http://localhost:3002/patient')
        .then((res)=>{
            console.log(res.data)
            setdata(res.data)
        })
        .catch((error)=>console.log(error))

    },[])

  return (
    <>

<table className='table table-striped'>
<thead>
    <tr>
        <th scope='col'>Name</th>
        <th scope='col'>Address</th>
        <th scope='col'>Guardian</th>
        <th scope='col'>Docter Name</th>
        <th scope='col'>Bed</th>
        <th scope='col'>Date</th>
        <th scope='col'>Time</th>
        <th scope='col'>Status</th>
    </tr>
</thead>


<tbody>
  {data.map((item)=>{
    
    return (
        <>
        {item.status !== null && <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.guardian}</td>
        <td>{item.docterName}</td>
        <td>{item.bedNumber}</td>
        <td>{item.date}</td>
        <td>{item.time}</td>
        <td>{item.status}</td>
       
    </tr>}
        </>
    )
  })}
</tbody>
</table>
    </>
  )
}

export default DeleteRecord