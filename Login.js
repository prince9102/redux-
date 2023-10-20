import React from 'react'
import { Formik , Form , Field } from 'formik'
import * as yup from 'yup';
import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const initial = {
        name:'',
        email:''
    }

    

    const validation = yup.object({
        name: yup.string().required(),
        email: yup.string().required(),
    })

  const  handleSubmit =(e)=>{
axios.get('http://localhost:3002/user')
.then((res)=>{
    let info = res.data.filter((item)=>(
        item.email == e.email && item.name == e.name
    ))

    if(info.length>0){
        localStorage.setItem('email' , JSON.stringify(info[0].email))

        toast.success('Login Sucessfully !', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    else{
        toast.warning('Invalid data !', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    console.log(res)
})

//    console.log(e)
  
        
        }
  return (
   <>
    
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

export default Login