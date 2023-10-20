import React from 'react'
import { Formik , Form , Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Docter = () => {

    const initial = {
        docterName:'',
        docterId:''
    }

    const validation =  yup.object({
        docterName: yup.string().required(),
        docterId: yup.number().required()
    })

    const  handleSubmit =(e)=>{
        axios.post('http://localhost:3002/docter' , e)
        .then((res)=>{
            console.log(res)
        })
        
            toast.success('Data save Sucessfully !', {
                position: toast.POSITION.TOP_CENTER
            });
          
                
                }
  return (

  <>

<ToastContainer />
    <Formik
    
 initialValues={initial}
 validationSchema={validation}
 onSubmit={(value)=>{

    handleSubmit(value)
 }}

    >


    <Form>
        <div className='container'>
            <div className='col-md-4'>
                <label htmlFor="">Docter Name :</label>
                <Field type='text' name='docterName' className='form-control' />

                <label htmlFor="">Docter Id :</label>
                <Field type='number' name='docterId' className='form-control' />
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </div>
    </Form>

    </Formik>


  </>
  )
}

export default Docter