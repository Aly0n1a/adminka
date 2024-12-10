import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import AdminPage from './pages/AdminPage'
const App = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<AdminPage/>}/>

    </Routes>
    </>
  )
}

export default App