import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Patient = () => {

    const [docterdata, setDocterData] = useState([])
    const [beddata, setbeddata] = useState([])


    useEffect(() => {

        Docter()
        Bed()
    }, [])

    const Docter = () => {
        axios.get('http://localhost:3002/docter')
            .then((res) => {
                setDocterData(res.data)
                console.log(res)
            })
    }

    const Bed = () => {
        axios.get('http://localhost:3002/bed')
            .then((res) => {
                setbeddata(res.data)
                console.log(res.data)
            })




    }

    const initial = {
        name: '',
        address: '',
        guardian: '',
        docterName: '',
        bedNumber: '',
        date: '',
        time: '',
    }

    const validation = yup.object({

        name: yup.string().required(),
        address: yup.string().required(),
        guardian: yup.string().required(),
        docterName: yup.string().required(),
        bedNumber: yup.string().required(),
        date: yup.string().required(),
        time: yup.string().required(),
    })


    const submit = (e) => {
        e.status = null
        e.ReleaseTime = null
        axios.post('http://localhost:3002/patient', e)
            .then((res) => {
                console.log(res)
            })

        toast.success('Data save Sucessfully !', {
            position: toast.POSITION.TOP_CENTER
        });


    }

    return (
        <>
            <Formik

                initialValues={initial}
                validationSchema={validation}
                onSubmit={(value) => {
                    submit(value)
                }}
            >


                <Form>
                    <div className='d-flex justify-content-center align-items-center w-100vw vh-100'>
                        <div className='w-50 border shadow'>
                            <div className='row'>
                                <div className='col-md-3'></div>
                                <div className='col-md-6'>
                                    <label htmlFor="">Name</label>
                                    <Field type='text' name='name' className='form-control' />

                                    <label htmlFor="">Address</label>
                                    <Field type='text' name='address' className='form-control' />

                                    <label htmlFor="">Guardian</label>
                                    <Field type='text' name='guardian' className='form-control' />

                                    <label htmlFor="">Docter Name</label>
                                    <Field as='select' name='docterName' className='form-control'>
                                        <option value="" disabled>Select name</option>
                                        {docterdata.map((item) => {
                                            return <option key={item.id} value={item.docterId}>{item.docterName}</option>
                                        })}
                                    </Field>
                                    <label htmlFor="">Bed Num</label>
                                    <Field as='select' name='bedNumber' className='form-control'>
                                        <option value="" disabled>Select name</option>
                                        {beddata.map((data) => {
                                            return <option key={data.id} value={data.bedId}>{data.bedName}</option>
                                        })}
                                    </Field>

                                    <label htmlFor="">Date</label>
                                    <Field type='date' name='date' className='form-control' />

                                    <label htmlFor="">Time</label>
                                    <Field type='time' name='time' className='form-control' />

                                    <button className='btn btn-primary m-3' type='submit'>Submit</button>
                                </div>
                                <div className='col-md-3'></div>
                            </div>

                        </div>

                    </div>
                </Form>
            </Formik>


        </>
    )
}



export default Patient

