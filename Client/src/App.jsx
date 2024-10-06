import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'

import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'



export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/projects' element={<Projects/>} />    
      <Route path='/dashboard' element={<Dashboard />} />    

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
