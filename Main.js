import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Staff from './Staff'
import Login from './Login'
import Header from './Header'
import Docter from './Docter'
import Bed from './Bed'
import Patient from './Patient'
import Table from './Table'
import Update from './Update'
import DeleteRecord from './DeleteRecord';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  return (
    <>
        <ToastContainer/>
        <BrowserRouter>
        
        <Header/>
            <Routes>
                <Route path='/reg' element={<Staff/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/doct' element={<Docter/>}/>
                <Route path='/bed' element={<Bed/>}/>
                <Route path='/patient' element={<Patient/>}/>
                <Route path='/table' element={<Table/>}/>
                <Route path='/update/:id' element={<Update/>}/>
                <Route path='/delete' element={<DeleteRecord/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Main