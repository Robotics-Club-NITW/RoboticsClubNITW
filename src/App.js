import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Members from './routes/Members'
import Events from './routes/Events'
import Projects from './routes/Projects'
import Alumni from './routes/Alumni'
import Footer from './components/Footer'


// import { Route, Router } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/members' element={<Members/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/alumni' element={<Alumni/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App