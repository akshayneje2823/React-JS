import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from './Component/Home'
import About from'./Component/About'
import Contact from './Component/Contact'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
          <Router>
              <Navbar/>
          <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/cotact' element={<Contact/>}/>
          </Routes>
          </Router>
        
      </div>
    )
  }
}

export default App
