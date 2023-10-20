import axios from 'axios'
import React, {useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Table = () => {
    const [data, setdata] = useState([])
    const {id} = useParams()

    useEffect(()=>{

        axios.get('http://localhost:3002/patient')
        .then((res)=>{
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
        <th scope='col'>Action</th>
    </tr>
</thead>


<tbody>
  {data.map((item)=>{
    
    return (
        <>
        {item.status == null && <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.guardian}</td>
        <td>{item.docterName}</td>
        <td>{item.bedNumber}</td>
        <td>{item.date}</td>
        <td>{item.time}</td>
        <td>
           <Link to={`/update/${item.id}`}> <button className='btn btn-success'>Update</button>  </Link>
        </td>
    </tr>}
        </>
    )
  })}
</tbody>



            </table>
    </>
   
  )
}

export default Table