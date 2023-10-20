import React from 'react'
import { Formik , Form , Field } from 'formik'
import * as yup from 'yup';
import {  toast } from 'react-toastify';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Staff = () => {
    const navigate = useNavigate()

    const initial = {
        name:'',
        email:''
    }

    const validation = yup.object({
        name: yup.string().required(),
        email: yup.string().required(),
    })

  const  handleSubmit =(e)=>{
axios.post('http://localhost:3002/user' , e)
.then((res)=>{
    console.log(res)
})

    toast.success('Register Sucessfully !', {
        position: toast.POSITION.TOP_CENTER
    });
  
        
        }

  return (
    <>
   
    <Formik
    
 initialValues={initial}
 validationSchema={validation}
 onSubmit={(value , {resetForm})=>{

    handleSubmit(value)
    resetForm({value:''})
    navigate('/login')
 }}

    >


    <Form>
        <div className='container'>
            <div className='col-md-4'>
                <label htmlFor="">Name :</label>
                <Field type='text' name='name' className='form-control' />

                <label htmlFor="">Email :</label>
                <Field type='email' name='email' className='form-control' />
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </div>
    </Form>

    </Formik>

    </>
  )
}

export default Staff