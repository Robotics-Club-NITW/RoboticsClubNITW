import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Members from './routes/Members'
import Events from './routes/Events'
import Projects from './routes/Projects'
import Alumni from './routes/Alumni'
import Footer from './components/Footer'
import Competitions from './routes/Competitions'
import Robocon from './components/Robocon'
import Eyantra from './components/Eyantra'
import OtherComp from './components/OtherComp'
import StartLoader from './components/StartLoader'
import EventPage from './components/EventPage'


// import { Route, Router } from 'react-router-dom'

const App = () => {
  return (
    <>
    <StartLoader/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/members' element={<Members/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/events/:eventid' element={<EventPage/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/alumni' element={<Alumni/>}/>
      <Route path='/competitions' element={<Competitions/>}>
        <Route path='robocon' element={<Robocon/>}/>
        <Route path='eyantra' element={<Eyantra/>}/>
        <Route path='others' element={<OtherComp/>}/>
      </Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App