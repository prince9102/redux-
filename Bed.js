import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Bed = () => {

    const initial = {
        bedName: '',
        bedId: ''
    }

    const validation = yup.object({
        bedName: yup.string().required(),
        bedId: yup.number().required()
    })

    const handleSubmit = (e) => {
        axios.post('http://localhost:3002/bed', e)
            .then((res) => {
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
                onSubmit={(value) => {

                    handleSubmit(value)
                }}

            >


                <Form>
                    <div className='container'>
                        <div className='col-md-4'>
                            <label htmlFor="">Bed Name :</label>
                            <Field type='text' name='bedName' className='form-control' />

                            <label htmlFor="">Bed Id :</label>
                            <Field type='number' name='bedId' className='form-control' />
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </Form>

            </Formik>


        </>
    )
}

export default Bed