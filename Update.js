import React, { useEffect, useState } from 'react';
import { Formik , Form , Field } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const Update = () => {
    const [data , setdata] = useState()

    const {id} =useParams()


    useEffect(()=>{

        axios.get('http://localhost:3002/patient/'+id)
        .then((res)=>{
            setdata(res.data)
            console.log(res.data)
        })

    },[])

    const initial ={
        status:'RELEASE'        
    }

    const validation = yup.object({

        status:yup.string().required(),
     
    })

const submit = (e)=>{
    const time = moment().format('YYYY-MM-DD hh:mm:ss a')
    data.status = e.status
    data.ReleaseTime = time
    console.log(data)
    axios.put('http://localhost:3002/patient/'+id ,data )
    .then((res)=>{
        console.log(res.data)
    })
}

  return (
    <>
<Formik

initialValues={initial}
validationSchema={validation}
onSubmit={(value)=>{
    submit(value)
}}

>

<Form>
   <div className='container'>
   <div className='row'>
    <div className='col-md-3'></div>
    <div className='col-md-6'>
    <label htmlFor="">Status</label>
    <Field type='text' name='status' value='RELEASE' className='form-control' />

    {/* <label htmlFor="">Date</label> */}
    {/* <Field type='datetime-local' name='datetime'  className='form-control' /> */}


    <button className='btn btn-primary m-3' type="submit">Release</button>
    </div>
    <div className='col-md-3'></div>
   </div>

   </div>
</Form>

</Formik>

    </>
  )
}

export default Update